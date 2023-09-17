import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

export default function ChatBox(props) {
    const { text } = props

    return (
        // <View>
        //     {
        //         isInput && 
        //         <View style={styles.inputContainer}>
        //             <Text style={styles.inputText}>{text}</Text>
        //         </View>
        //     }
        //     {
        //         (!isInput) &&
        <View style={styles.responseContainer}>
            <Text style={styles.responseText}>{text}</Text>
        </View>
        //     }
        // </View>
        // <View 
        //     style={styles.inputContainer ? isInput : styles.response}
        // >
        //     <Text 
        //         style={styles.inputContainer ? isInput : styles.response}
        //     >{text}</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    responseContainer: {
        maxWidth: "80%",
        width: "auto",
        height: "auto",
        borderRadius: 50,
        backgroundColor: "#fff", 
        marginTop: 10,
        marginRight: "auto",
        padding: 10,
        paddingHorizontal: 20
    },
    responseText: {
        // fontFamily: "Cochin",
        fontSize: 20,
        backgroundColor: '#fff',
        color: "#000"
    },
    inputContainer: {
        width: "auto",
        height: "auto",
        borderRadius: 50,
        backgroundColor: "#405DE6",
        marginTop: 10,
        marginLeft: "auto",
        padding: 10,
        paddingHorizontal: 20
    },
    inputText: {
        // fontFamily: "Cochin",
        fontSize: 20,
        backgroundColor: '#405DE6',
        color: "#fff"
    }
})