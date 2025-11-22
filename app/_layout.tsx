import { Stack } from 'expo-router';
 
export default function RootLayout() {
  return (
<Stack>
<Stack.Screen name="index" options={{ title: 'Employee Management System' }} />
<Stack.Screen name="EmployeeForm" options={{ title: 'Employee Form' }} />
<Stack.Screen name="SignInForm" options={{ title: 'Sign In' }} />
<Stack.Screen name="SignUpForm" options={{ title: 'Sign Up' }} />
</Stack>
  );
}