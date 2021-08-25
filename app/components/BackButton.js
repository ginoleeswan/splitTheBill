import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const BackButton = ({ navigation }) => {
  return (
    <TouchableHighlight
      style={styles.backBtn}
      onPress={() => navigation.goBack()}
    >
      <Icon name="chevron-back" style={styles.backIcon}></Icon>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#363355",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  backIcon: {
    color: "#e7c294",
    fontSize: 35,
    textAlign: "center",
    marginLeft: 1,
  },
});

export default BackButton;
