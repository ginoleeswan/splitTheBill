import React, { useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { BillContext } from "../../context/BillContext";
import { Colors } from "../../styles/colors";
import { TextH2, TextH4 } from "../../styles/typography";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";
import Bill from "./bill";

const History = ({ navigation }) => {
  const [bills, setBills] = useContext(BillContext);

  let [fontsLoaded] = useFonts({
    "VisbyRoundCF-Regular": require("../../assets/fonts/VisbyRoundCF-Regular.ttf"),
    "VisbyRoundCF-Bold": require("../../assets/fonts/VisbyRoundCF-Bold.ttf"),
    "VisbyRoundCF-DemiBold": require("../../assets/fonts/VisbyRoundCF-DemiBold.ttf"),
    "VisbyRoundCF-Medium": require("../../assets/fonts/VisbyRoundCF-Medium.ttf"),
    "VisbyRoundCF-Heavy": require("../../assets/fonts/VisbyRoundCF-Heavy.ttf"),
    "VisbyRoundCF-ExtraBold": require("../../assets/fonts/VisbyRoundCF-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.appContainer}>
        <Header title="History" />
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {bills.map((bill) => (
            <Bill
              id={bill.id}
              totalAmount={bill.totalAmount}
              catagory={bill.catagory}
              date={bill.date}
              tip={bill.tip}
              people={bill.people}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: 35,
    paddingTop: 60,
    overflow: "hidden",
    backgroundColor: Colors.purple,
  },
  billContainer: {
    width: 150,
    height: 150,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkPurple,
    borderRadius: 40,
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
    marginBottom: 5,
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

export default History;
