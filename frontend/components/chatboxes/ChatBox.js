import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

export default function ChatBox(props) {
    const { text } = props

    return (
       
        <View style={styles.responseContainer}>
            <Text style={styles.responseText}>{text}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    responseContainer: {
        maxWidth: "80%",
        width: "auto",
        height: "auto",
        borderRadius: 15,
        backgroundColor: "#000", 
        marginTop: 10,
        marginRight: "auto",
        padding: 10,
        paddingHorizontal: 20
    },
    responseText: {
        // fontFamily: "Cochin",
        fontSize: 15,
        backgroundColor: '#000',
        color: "#fff"
    },
    
    
})