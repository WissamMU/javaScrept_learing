import { StatusBar } from 'expo-status-bar'; // Import the StatusBar component to manage status bar styles.
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { NavigationContainer } from '@react-navigation/native'; // Import the main navigation container.
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import the stack navigator component.
import HomeScreen from './screens/Home'; // Import the HomeScreen component.
import SupplierScreen from './screens/Supplier'; // Import the SupplierScreen component.
import SignUpScreen from './screens/SignUp'; // Import the SignUpScreen component.

const Stack = createNativeStackNavigator(); // Create an instance of the stack navigator.

export default function App() {
  return (
    <NavigationContainer> 
      {/* Wrap the entire app within the NavigationContainer to enable navigation. */}
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff', // Set the background color of the header.
          },
          headerTintColor: "#fff", // Set the color of the header text.
          headerTitleStyle: {
            fontWeight: 'bold', 
            textAlign: 'right', 
            fontFamily: 'notoFont', // Customize the font family for the header title.
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Hide the header for the Home screen.
        />
        <Stack.Screen 
          name="Supplier" 
          component={SupplierScreen} 
          options={{
            title: "Supplier page 1" // Set the title for the SupplierScreen.
          }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{
            title: "sign up page" // Set the title for the SignUpScreen.
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});