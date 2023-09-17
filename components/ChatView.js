import React, { Component, useState } from "react";
import  { StyleSheet, ScrollView, View, Text, StatusBar, TextInput, KeyboardAvoidingView } from "react-native";
import { ChatContext } from "../context/ChatContext";
import ChatBox from "./chatboxes/ChatBox.js";
import UserChatBox from "./chatboxes/UserChatBox";
import { useContext, useRef, useEffect } from "react";
import InputBar from "./InputBar"
import { useFocusEffect } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function ChatView(props) {
  const chatContext = useContext(ChatContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ref={ref => {this.scrollView = ref}}
          onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
        >
          {chatContext.userResponse.map(
            (element, index) => {
              if (element.role == "user") {
                return <UserChatBox text={element.content} key={index}/>
              } else {
                return <ChatBox text={element.content} key={index}/>
              }
            }
          )}
        </ScrollView>
        <InputBar/>
       </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
  },
  scrollArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  scrollArea_contentContainer: {
    height: "auto",
    width: "100%",
    alignSelf: "center",
    borderRadius: 5,

  }
    
});
