import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'expo-router';
 
const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
 
export default function SignInForm() {
  const handleSignIn = (values: any, { resetForm }: any) => {
    console.log('Sign In Data:', values);
    Alert.alert(
      'Success',
      'Signed in successfully!',
      [{ text: 'OK', onPress: () => resetForm() }]
    );
  };
 
  return (
<View style={styles.container}>
<Text style={styles.title}>Sign In</Text>
<Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInValidationSchema}
        onSubmit={handleSignIn}
>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
<View style={styles.formContainer}>
<TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
<Text style={styles.errorText}>{errors.email}</Text>
            )}
 
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
<Text style={styles.errorText}>{errors.password}</Text>
            )}
 
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>
 
            <Link href="/SignUpForm" asChild>
<TouchableOpacity style={[styles.button, styles.secondaryButton]}>
<Text style={styles.buttonText}>Create New Account</Text>
</TouchableOpacity>
</Link>
 
            <Link href="/" asChild>
<TouchableOpacity style={[styles.button, styles.backButton]}>
<Text style={styles.buttonText}>Back to Home</Text>
</TouchableOpacity>
</Link>
</View>
        )}
</Formik>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
  },
  backButton: {
    backgroundColor: '#8E8E93',
  },
});