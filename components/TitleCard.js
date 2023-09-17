import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function TitleCard(props) {
    const { title, text } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        backgroundColor: '#291',
        marginHorizontal: 10,
        borderRadius: 20,
        height: "30%",
        width: "90%"
    },
    title: {

    },
    text: {

    }
})