import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function NavigationBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="television"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonWrapper4,
          {
            backgroundColor: props.active
              ? "rgba(0, 122, 255,0.1)"
              : "transparent"
          }
        ]}
      >
        <IoniconsIcon
          name={
            props.active
              ? "ios-information-circle"
              : "ios-information-circle-outline"
          }
          style={styles.icon4}
        ></IoniconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  buttonWrapper2: {
    flex: 1,
    alignItems: "center",
    minWidth: 30,
    maxWidth: 36,
    height: 38,
    borderRadius: 4,
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  },
  buttonWrapper4: {
    flex: 1,
    minWidth: 30,
    maxWidth: 36,
    height: 38,
    borderRadius: 4,
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  }
});

export default NavigationBar;