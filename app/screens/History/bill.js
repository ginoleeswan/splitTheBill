import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/colors";

const Bill = ({ id, catagory, totalAmount, people, tip, date }) => {
  const theTip = `${tip}%`;
  return (
    <View style={styles.billContainer} key={id}>
      <View style={styles.billInfo}>
        <Text style={styles.h4Light}>Catagory: </Text>
        <Text style={styles.h4Light}>{catagory}</Text>
      </View>
      <View style={styles.billInfo}>
        <Text style={styles.h4Light}>Amount: </Text>
        <Text style={styles.h4Light}>R{totalAmount}</Text>
      </View>
      <View style={styles.billInfo}>
        <Text style={styles.h4Light}>Tip: </Text>
        <Text style={styles.h4Light}>{theTip}</Text>
      </View>
      <View style={styles.billInfo}>
        <Text style={styles.h4Light}>People: </Text>
        <Text style={styles.h4Light}>{people}</Text>
      </View>
      <View style={styles.billInfo}>
        <Text style={styles.h4Light}>Date: </Text>
        <Text style={styles.h4Light}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billContainer: {
    width: 250,
    // height: 150,
    padding: 25,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkPurple,
    borderRadius: 40,
  },
  billInfo: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "left",
    marginBottom: 10,
  },
  h4: {
    fontFamily: "VisbyRoundCF-Bold",
    color: Colors.darkPurple,
    fontSize: 15,
  },
  h4Light: {
    fontFamily: "VisbyRoundCF-Bold",
    color: Colors.gold,
    fontSize: 14,
  },
  h4Grey: {
    fontFamily: "VisbyRoundCF-Bold",
    color: "#787a8f",
    fontSize: 14,
  },
  h4White: {
    fontFamily: "VisbyRoundCF-Bold",
    color: Colors.white,
    fontSize: 14,
    marginBottom: 5,
  },
  h2: {
    fontFamily: "VisbyRoundCF-Heavy",
    color: "#47436a",
    fontSize: 35,
  },
});

export default Bill;
