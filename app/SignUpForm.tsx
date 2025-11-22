import { Link } from 'expo-router';
import { Formik } from 'formik';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
 
const SignUpValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});
 
export default function SignUpForm() {
  const handleSignUp = (values: any, { resetForm }: any) => {
    console.log('Sign Up Data:', values);
    Alert.alert(
      'Success',
      'Account created successfully!',
      [{ text: 'OK', onPress: () => resetForm() }]
    );
  };
 
  return (
<ScrollView style={styles.container}>
<Text style={styles.title}>Sign Up</Text>
<Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpValidationSchema}
        onSubmit={handleSignUp}
>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
<View style={styles.formContainer}>
<TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            {touched.firstName && errors.firstName && (
<Text style={styles.errorText}>{errors.firstName}</Text>
            )}
 
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName && (
<Text style={styles.errorText}>{errors.lastName}</Text>
            )}
 
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
 
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
            />
            {touched.confirmPassword && errors.confirmPassword && (
<Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
 
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={styles.buttonText}>Create Account</Text>
</TouchableOpacity>
 
            <Link href="/SignInForm" asChild>
<TouchableOpacity style={[styles.button, styles.secondaryButton]}>
<Text style={styles.buttonText}>Back to Sign In</Text>
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
</ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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