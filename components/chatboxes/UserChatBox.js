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
        width: "auto",
        height: "auto",
        borderRadius: 50,
        backgroundColor: "#405DE6",
        marginTop: 10,
        marginLeft: "auto",
        padding: 10,
        paddingHorizontal: 20
    },
    text: {
        // fontFamily: "Cochin",
        fontSize: 20,
        backgroundColor: '#405DE6',
        color: "#fff"
    }
})