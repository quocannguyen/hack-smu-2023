import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

export default function UserChatBox(props) {
    const { text } = props

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: "80%",
        width: "auto",
        height: "auto",
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: "#fff",
        marginTop: 10,
        marginLeft: "auto",
        padding: 10,
        paddingHorizontal: 20
    },
    text: {
        // fontFamily: "Cochin",
        fontSize: 15,
        backgroundColor: '#fff',
        color: "#000"
    }
})