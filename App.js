import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ChatContextProvider } from './context/ChatContext';

import ChatScreen from "./screens/ChatScreen"
import QuizScreen from "./screens/QuizScreen"

const nativeStackNavigator = createNativeStackNavigator()
export default function App() {
  return (
    <ChatContextProvider>
      <NavigationContainer>
        <nativeStackNavigator.Navigator screenOptions={{ headShown: false }}>
          <nativeStackNavigator.Screen name="ChatScreen" component={ChatScreen} />
          <nativeStackNavigator.Screen name="QuizScreen" component={QuizScreen} />
        </nativeStackNavigator.Navigator>
      </NavigationContainer>
    </ChatContextProvider>
  );
}
