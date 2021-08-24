import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <BackButton />
      <Text style={styles.appTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 35,
    marginBottom: 30,
    alignItems: "center",
  },
  appTitle: {
    fontFamily: "VisbyRoundCF-Bold",
    fontSize: 30,
    alignSelf: "center",
    textAlign: "right",
    color: "#e7c294",
  },
});

export default Header;
