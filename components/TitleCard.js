import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


export default function TitleCard(props) {
    const { title, text, leftColor, rightColor } = props
    return (

        <LinearGradient
        colors={[leftColor, rightColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      > 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </LinearGradient>
            

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#fff',
        marginHorizontal:0,
        marginTop: 10,
        borderRadius: 20,
        height: "25%",
        width: "90%",
    },
    title: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
    
})