import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Text, View, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TitleCard from "../components/TitleCard"
import {LinearGradient} from 'expo-linear-gradient';
import {QuizSelectionCard} from '../components/cards/QuizSelectionCard';
import { VerticalCardsContainer } from "../components/cardcontainers/VerticalCardsContainer"
import { Overlay } from 'react-native-elements';
import { FlippedCard } from '../components/cards/FlippedCard'
import React, { useState, useEffect } from "react";

import Ionicons from 'react-native-vector-icons/Ionicons';

import ChatContext from "../context/ChatContext"

export default function QuizScreen() {
  useEffect(() => {
    console.log("Into QuizScreen")
  }, [])
  const [visible, setVisible] = useState(false);
  
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "white" }}>
      
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={{flex: 1, minWidth: "100%"}}>
        <View style={styles.quizTakingView}>
          <View title="topBar" style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Ionicons name='close-outline' color="black" size={28} style={{marginLeft: 0}}/>
            <Text>Quiz your knowledge</Text>
          </View>
          <ScrollView style={{display: "flex", backgroundColor: "red"}} horizontal>
            <FlippedCard question={"test"} answer={"test answer"}/>
          </ScrollView>
          
        <Text>Hello from Overlay!</Text>
        <Button title="Close Overlay" onPress={toggleOverlay} />
        </View>
      </Overlay>

      <LinearGradient
        colors={['#56BFE0', '#10AFEA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ position: "absolute", backgroundColor: "yellow", height: "20%", width: "100%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      />
      <SafeAreaView style={styles.container}>
        <TitleCard title="Welcome!" text="Good news for all !\nWe develop awesome apps!" />
        <View style={{ padding: 10, width: "100%", height: "75%"}}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.innerContent}>
            {/* Add other components/content here */}
            <Text style={styles.sectionTitle}>
              Recent Quizzes
            </Text>
            <ScrollView style={styles.scrollView} horizontal>
            <QuizSelectionCard title="test" description="text" leftColor="#56BFE0" rightColor="#10AFEA" iconName="arrow-forward-outline" onPress={() => {
              toggleOverlay()
            }}/>
              </ScrollView>
            <View>
              <View>
                <Text style={styles.sectionTitle}>
                  All Quizzes
                </Text>
              </View>
              <View style={styles.scrollView}>
                <QuizSelectionCard title="test" description="text" leftColor="#56BFE0" rightColor="#10AFEA" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#56BFE0" rightColor="#10AFEA" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#56BFE0" rightColor="#10AFEA" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#56BFE0" rightColor="#10AFEA" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#56BFE0" rightColor="#10AFEA" iconName="arrow-forward-outline"/>
                {/* <QuizSelectionCard title="a" description="b" leftColor="#FFFFFF" rightColor="#FFFFFF" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#56BFE0" rightColor="#10AFEA" iconName="arrow-forward-outline"/> */}
              </View>
            </View>
          </View>
        </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  quizTakingView: {
    display: "flex",
    height: "80%",
    width: "80%"
  },
  scrollView: {
    backgroundColor: 'white',
    width: "100%",
    padding: 5,
    marginVertical: 5,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 25
  },
  text: {
    fontSize: 42,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can adjust this based on your image size
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
    width: "100%"
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  innerContent: {
    width: "100%", // Ensure that the inner content takes up 100% width
  },
});
