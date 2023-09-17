import React, { Component, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";

// import Animated from "react-native-reanimated";
// import { useSharedValue, useAnimatedStyle  } from 'react-native-reanimated';

  
export default function QuizCard(props = {
    question: "hello",
    answer: "hello",
}) {
    // const spin = useSharedValue<Number>(0);

    const { question, answer } = props
    const [showQuestionState, setShowQuestionState] = useState(true)

    const rStyle = useAnimatedStyle(() => {
        const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
        return {
          transform: [
            {
              rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
            },
          ],
        };
      }, []);
    
      const bStyle = useAnimatedStyle(() => {
        const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
        return {
          transform: [
            {
              rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
            },
          ],
        };
      }, []);

    return (

        <View>
        <View>
          <Animated.View style={[styles.front, AnimationEffect.rStyle]}>
            <Text></Text>
          </Animated.View>
          <Animated.View style={[styles.back, AnimationEffect.bStyle]}>
            <Text></Text>
          </Animated.View>
        </View>
        <Pressable
          onPress={() => (spin.value = spin.value ? 0 : 1)}
          style={{ marginTop: 30, alignItems: "center" }}
        >
          <Text style={{ fontSize: 16 }}>Flip</Text>
        </Pressable>
      </View>

        // <View 
        //     style={styles.container} 
        //     onTouchEnd={() => {setShowQuestionState(!showQuestionState); console.log('Touched card');}}
        // >
        //     {showQuestionState ? (
        //         <Text style={styles.text}>{question}</Text>
        //     ) : (
        //         <Text style={styles.text}>{answer}</Text>
        //     )}
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        borderRadius: 20,
        backgroundColor: "#000", 
        color: "#fff",
        marginTop: 10,
        marginHorizontal: 45, // Use 'auto' instead of 50
        marginRight: "auto",
        justifyContent: "center",
        alignSelf: 'center', // Center horizontally within the parent

    },
    text: {
        // fontFamily: "Cochin",
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
    },
    front: {
        height: 400,
        width: 250,
        backgroundColor: "#000",
        borderRadius: 16,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
     },
     back: {
        height: 400,
        width: 250,
        backgroundColor: "#000",
        borderRadius: 16,
        backfaceVisibility: "hidden",
        alignItems: "center",
        justifyContent: "center",
     },
})