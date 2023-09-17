import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Ionicons from "react-native-vector-icons/Ionicons";

export function QuizSelectionCard(props) {
  const {
    title,
    description,
    leftColor,
    rightColor,
    iconName,
    onPress,
    isMarginedRight,
  } = props;

  useEffect(() => {
    console.log("Personalized: " + isMarginedRight);
  }, []);
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[leftColor, rightColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.container,
          isMarginedRight ? styles.personalizedContainer : null,
        ]}
      >
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{title}</Text>
          {description != "" && (
            <Text style={styles.description}>{description}</Text>
          )}
        </View>
        <Ionicons
          name={iconName}
          color="black"
          size={28}
          style={{ marginLeft: 40 }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  personalizedContainer: {
    marginRight: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    width: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rightContainer: {
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  description: {
    fontSize: 14,
    color: "black",
  },
});

export default QuizSelectionCard;
