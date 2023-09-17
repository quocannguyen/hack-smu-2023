import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatContextProvider } from './context/ChatContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ChatScreen from "./screens/ChatScreen"
import QuizScreen from "./screens/QuizScreen"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <ChatContextProvider>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chat') {
              iconName = focused
                ? 'ios-chatbubble-outline'
                : 'ios-chatbubble-outline';
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'ios-book-outline'
              : 'ios-book-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#06336e',
          tabBarInactiveTintColor: 'white', tabBarStyle: { backgroundColor: '#000' },
          headerShown: false
        })}
          >
            <Tab.Screen name="Quiz" component={QuizScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
          </Tab.Navigator>

        </ChatContextProvider>
      </NavigationContainer>
  );
}
