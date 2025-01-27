import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View as RNView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import SupplierScreen from './screens/Suppliers';
import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import ProfileScreen from './screens/Profile';
import { useFonts, NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import * as SplashScreen from 'expo-splash-screen';
import UpdateProfileScreen from './screens/UpdateProfile';

const Stack = createNativeStackNavigator();

// منع إخفاء شاشة التحميل تلقائيًا
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // إخفاء شاشة التحميل بمجرد أن تكون الخطوط جاهزة وعند اكتمال التنسيق
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007bff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'right',
              fontFamily: 'NotoSans_400Regular',
            },
          }}
        >
          <Stack.Screen name='Home'// its like id 
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Supplier'
            component={SupplierScreen}
            options={{ title: 'Supplier page 1' }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUpScreen}
            options={{ title: 'sign up page' }}
          />
          <Stack.Screen
            name='SignIn'
            component={SignInScreen}
            options={{ title: 'sign in page' }}
          />
          <Stack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{ title: 'Profile page' }}
          />
          <Stack.Screen
            name='UpdateProfile'
            component={UpdateProfileScreen}
            options={{ title: 'Update Profile page' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
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
