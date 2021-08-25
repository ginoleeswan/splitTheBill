import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";

const Header = ({ title, backButton }) => {
  if (backButton == true) {
    return (
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.appTitle}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.headerNoBackButton}>
        <Text style={styles.appTitle}>{title}</Text>
      </View>
    );
  }
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
  headerNoBackButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
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
