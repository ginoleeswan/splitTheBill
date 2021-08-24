import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
// import { Switch } from "react-native-elements";

const PaymentCard = ({ name, number, date }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  let [fontsLoaded] = useFonts({
    "VisbyRoundCF-Bold": require("../../assets/fonts/VisbyRoundCF-Bold.ttf"),
    "VisbyRoundCF-Heavy": require("../../assets/fonts/VisbyRoundCF-Heavy.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.paymentCard}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text style={styles.cardName}>{name}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
          />
        </View>

        <Text style={styles.cardNumber}>{number}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.cardSubtitle}>Valid Until</Text>
            <Text style={styles.cardDate}>{date}</Text>
          </View>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.buttonTxt}>R230.46</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  paymentCard: {
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    width: 230,
    height: 300,
    padding: 20,
    // paddingTop: 20,
    marginTop: 10,
    // marginHorizontal: 20,

    backgroundColor: "#e7c294",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 18.84,

    elevation: 5,
    overflow: "scroll",
  },
  cardName: {
    fontFamily: "VisbyRoundCF-Heavy",
    color: "#47436a",
    fontSize: 15,
  },
  cardNumber: {
    fontFamily: "VisbyRoundCF-Heavy",
    color: "#47436a",
    fontSize: 13,
    marginBottom: 20,
  },
  cardDate: {
    fontFamily: "VisbyRoundCF-Bold",
    color: "#47436a",
    fontSize: 12,
  },
  cardSubtitle: {
    fontFamily: "VisbyRoundCF-Heavy",
    color: "#47436a",

    fontSize: 7,
    marginBottom: 5,
  },
  payButton: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#47436a",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 5,
  },
  buttonTxt: {
    fontFamily: "VisbyRoundCF-Heavy",
    color: "#fff",
    fontSize: 15,
  },
});

export default PaymentCard;
