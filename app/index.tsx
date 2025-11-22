import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
 
export default function HomeScreen() {
  return (
<ScrollView style={styles.container}>
<Text style={styles.title}>Employee Management System</Text>
<Link href="/EmployeeForm" asChild>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Employee Information Form</Text>
</TouchableOpacity>
</Link>
 
      <Link href="/SignInForm" asChild>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Sign In Form</Text>
</TouchableOpacity>
</Link>
 
      <Link href="/SignUpForm" asChild>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Sign Up Form</Text>
</TouchableOpacity>
</Link>
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
    marginBottom: 30,
    color: '#333',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});