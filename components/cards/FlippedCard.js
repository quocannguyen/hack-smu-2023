import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";

export const FlippedCard = (props) => {
  const { question, answer } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const rotateY = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

  const handleCardPress = () => {
    // First, fade out the text
    Animated.timing(textOpacity, {
      toValue: 0,
      duration: 130,
      useNativeDriver: false,
      easing: Easing.easeInOut,
    }).start(() => {
      // Then, flip the card
      Animated.timing(rotateY, {
        toValue: isFlipped ? 0 : 1,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.easeInOut,
      }).start(() => {
        setIsFlipped(!isFlipped);
        // Finally, fade in the text
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 80,
          useNativeDriver: false,
          easing: Easing.easeInOut,
        }).start();
      });
    });
  };

  const interpolatedRotateY = rotateY.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const frontStyle = {
    transform: [{ rotateY: interpolatedRotateY }],
  };

  const backStyle = {
    transform: [{ rotateY: interpolatedRotateY }],
  };

  return (
    <TouchableOpacity onPress={handleCardPress} activeOpacity={1}>
      <Animated.View
        style={[styles.container, isFlipped ? backStyle : frontStyle]}
      >
        <Animated.Text
          style={[
            styles.text,
            { opacity: textOpacity }, // Apply opacity animation
            isFlipped ? styles.hiddenText : null,
          ]}
        >
          {question}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.text,
            styles.flippedText,
            { opacity: textOpacity }, // Apply opacity animation
            !isFlipped ? styles.hiddenText : null,
          ]}
        >
          {answer}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    borderRadius: 20,
    backgroundColor: "black",
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 200,
    marginHorizontal: 45,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    position: "absolute",
    color: "white",
  },
  flippedText: {
    transform: [{ scaleX: -1 }], // Apply horizontal flip to the text
    color: "white",
  },
  hiddenText: {
    display: "none",
    color: "black",
  },
});

export default FlippedCard;
