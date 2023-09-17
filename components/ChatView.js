import React, { Component, useState } from "react";
import  { StyleSheet, ScrollView, View, Text, StatusBar, TextInput } from "react-native";
import { ChatContext } from "../context/ChatContext";
import ChatBox from "./chatboxes/ChatBox.js";
import UserChatBox from "./chatboxes/UserChatBox";
import { useContext } from "react";
import InputBar from "./InputBar"
// import CupertinoSearchBarBasic1 from "CupertinoSearchBarBasic1";
// import Icon from "react-native-vector-icons/Feather";


export default function ChatView(props) {
    const chatContext = useContext(ChatContext);
    const [userInputsState, setUserInputsState] = useState(chatContext.userInputs)

    function addUserInputHandler(userInput) {
        console.log("ChatView: addUserInputHandler")
        setUserInputsState([
            ...userInputsState,
            userInput
        ])
        console.log(userInputsState)
    }
    

  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainer}
        >
            {/* {chatContext.userInputs.map(input => <UserChatBox text={input}/>)} */}
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


    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    justifyContent: "center"
  },
  scrollArea: {
    top: -100,
    width: 380,
    height: 550,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column"
  },
  scrollArea_contentContainer: {
    top: 50,
    height: "100%",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 5,
  }
    
});
