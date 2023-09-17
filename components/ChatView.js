import React, { Component, useState } from "react";
import  { StyleSheet, ScrollView, View, Text, StatusBar, TextInput, KeyboardAvoidingView } from "react-native";
import { ChatContext } from "../context/ChatContext";
import ChatBox from "./chatboxes/ChatBox.js";
import UserChatBox from "./chatboxes/UserChatBox";
import { useContext } from "react";
import InputBar from "./InputBar"

export default function ChatView(props) {
    const chatContext = useContext(ChatContext);
    

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainer}
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
    justifyContent: "center"
  },
  scrollArea: {
    // top: -100,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",

  },
  scrollArea_contentContainer: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,

  }
    
});
