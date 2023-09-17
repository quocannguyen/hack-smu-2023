import React, { Component, useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { getOpenAi } from "../api/openai";
import { ChatContext } from "../context/ChatContext";
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Feather"
import { getQuizOpenAI } from "../api/openai"


export default function InputBar(props) {
    const chatContext = useContext(ChatContext)
    const [inputValue, setInputValue] = useState('');

    const handleSend = async () => {
        console.log("handleSend");
        await chatContext.addUserInput(inputValue);
        setInputValue("");
        await getOpenAi(inputValue).then(r => chatContext.addResponse(r));
    }

    const handleQuiz = async () => {
        console.log("=======handleQuiz=========");
    // console.log(chatContext.userResponse);

    // Call to get the quiz
    if (chatContext.chatLog !== undefined && chatContext.chatLog !== "") {
      console.log("Sending" + chatContext.chatLog);
      console.log("Creating chat log");
      var chatLog = "";
      chatContext.userResponse.forEach(element => {
        console.log(element.content);
        chatLog += element.role + ": " + element.content + '\n';
      });
      console.log(chatLog)
      getQuizOpenAI(chatLog).then((r) => {
        console.log("Received: " + r);
        r = JSON.parse(r);
        r.questions.forEach(item => {
          chatContext.addQuiz(item)
        });
        chatContext.addQuizSet(r.questions)
      });
    } else {
      console.log("Empty, do not send")
    }

    // Reset chat log
    chatContext.resetLog();
  }

    return (
        <View style={styles.container}>

            <View style={styles.wrapper}>
                <TextInput
                    placeholder="Text Input"
                    placeholderTextColor="#969696" 
                    style={styles.input}
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                ></TextInput>

                <TouchableOpacity
                    style={{
                        // backgroundColor: '#000', // Button background color

                        padding: 10, // Padding to add
                        borderRadius: 5, // Optional: Add border radius for rounded corners
                    }}
                    onPress={handleSend}
                    >
                    <Icon name="send" style={styles.icon}></Icon>
                    {/* <Text style={{ color: '#fff', fontSize: 20,textAlign: 'center' }}>{"ios-paper-plane-outline"}</Text> */}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.quiz}
                    onPress={handleQuiz}
                    >
                    <Icon name="book-open" style={styles.quiz}></Icon>
                    {/* <Text style={{ color: '#fff', fontSize: 20,textAlign: 'center' }}>{"ios-paper-plane-outline"}</Text> */}
                </TouchableOpacity>
            </View>
            
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "auto",
        padding: 20,
        bottom: "auto",
        // backgroundColor: '#fffdaf'
    },
    input: {
        top: 0,
        height: 'auto',
        width: "100%",
        flexWrap: 'wrap',
        
        paddingRight: 65,
        padding: 10,
        fontSize: 15,
        borderRadius: 10,
        backgroundColor: "#ededed",
    },
    icon: {
        color: "#000",
        fontSize: 25,
        marginLeft: -70,
    },
    quiz: {
        color: "#000",
        fontSize: 25,
        marginLeft: -30,
        fontSize: 25,
        padding: 5

    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#ededed',
    }
});