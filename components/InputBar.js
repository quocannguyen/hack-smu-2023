import React, { Component, useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { getOpenAi } from "../api/openai";
import { ChatContext } from "../context/ChatContext";
import { TouchableOpacity } from 'react-native';

export default function InputBar(props) {
    const chatContext = useContext(ChatContext)
    const [inputValue, setInputValue] = useState('');

    const handleButtonPress = async () => {
        console.log("handleButtonPress");
        await chatContext.addUserInput(inputValue);
        setInputValue("");
        await getOpenAi(inputValue).then(r => chatContext.addResponse(r));
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Text Input"
                style={styles.input}
                value={inputValue}
                onChangeText={text => setInputValue(text)}
            ></TextInput>

            <TouchableOpacity
                style={{
                    backgroundColor: '#000', // Button background color
                    margin: 5,
                    padding: 5, // Padding to add
                    borderRadius: 5, // Optional: Add border radius for rounded corners
                }}
                onPress={handleButtonPress}
                >
                <Text style={{ color: '#fff', fontSize: 20,textAlign: 'center' }}>{"Submit"}</Text>
            </TouchableOpacity>

            {/* <Button 
                title ="Submit"
                color="#000"
                style={{ padding: 50}}
                onPress={handleButtonPress}
            /> */}
            
    
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
        backgroundColor: '#00ff00'
    },
    input: {
        top: 0,
        width: '80%',
        padding: 10,
        fontSize: 20,
        borderRadius: 20,
        backgroundColor: "#f0f0f0",
        color: "#000"
    },

});