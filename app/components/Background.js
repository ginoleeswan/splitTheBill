import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Background = ({ navigation }) => {
  return <View style={styles.background} />;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: 35,
    paddingTop: 60,
    overflow: "hidden",
    backgroundColor: "#47436a",
  },
});

export default Background;
