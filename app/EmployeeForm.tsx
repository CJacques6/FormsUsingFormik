import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'expo-router';
 
const EmployeeValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  department: Yup.string()
    .required('Department is required'),
});
 
export default function EmployeeForm() {
  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log('Employee Data:', values);
    Alert.alert(
      'Success',
      'Employee information submitted successfully!',
      [{ text: 'OK', onPress: () => resetForm() }]
    );
  };
 
  return (
<ScrollView style={styles.container}>
<Text style={styles.title}>Employee Information Form</Text>
<Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          department: '',
        }}
        validationSchema={EmployeeValidationSchema}
        onSubmit={handleSubmit}
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
              placeholder="Phone Number"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && (
<Text style={styles.errorText}>{errors.phone}</Text>
            )}
 
            <TextInput
              style={styles.input}
              placeholder="Department"
              onChangeText={handleChange('department')}
              onBlur={handleBlur('department')}
              value={values.department}
            />
            {touched.department && errors.department && (
<Text style={styles.errorText}>{errors.department}</Text>
            )}
 
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
<Text style={styles.submitButtonText}>Submit Employee Information</Text>
</TouchableOpacity>
 
            <Link href="/" asChild>
<TouchableOpacity style={styles.backButton}>
<Text style={styles.backButtonText}>Back to Home</Text>
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
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#8E8E93',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
