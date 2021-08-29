import SegmentedControl from "rn-segmented-control";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import { BillContext } from "../../context/BillContext";
import { Colors } from "../../styles/colors";

import { ScrollView } from "react-native-gesture-handler";

import Bill from "./bill";
import { Button } from "react-native-elements/dist/buttons/Button";
import bill from "./bill";

const History = ({ navigation }) => {
  const [bills, setBills] = useContext(BillContext);

  const currentBills = bills;

  const onDismiss = useCallback((bill) => {
    // console.log("OLD ARRAY");
    // console.log(currentBills);

    setBills((bills) => bills.filter((item) => item.id !== bill.id));
  }, []);

  const renderItem = ({ item }) => (
    <Bill
      id={item.id}
      bill={item}
      totalAmount={item.totalAmount}
      catagory={item.catagory}
      date={item.date}
      tip={item.tip}
      people={item.people}
      onDismiss={onDismiss}
      simultaneousHandlers={scrollRef}
    />
  );

  const scrollRef = useRef(null);

  useEffect(() => {
    console.log("====================================");
    console.log("CURRENT BILLS");
    console.log("====================================");
    console.log(bills);
  }, [bills]);

  return (
    <View style={styles.appContainer}>
      <Header title="History" backButton={false} />

      {/* <ScrollView
        ref={scrollRef}
        style={{ width: "100%" }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      {/* {bills.map((bill, index) => (
          <Bill
            key={index}
            id={bill.id}
            bill={bill}
            totalAmount={bill.totalAmount}
            catagory={bill.catagory}
            date={bill.date}
            tip={bill.tip}
            people={bill.people}
            onDismiss={onDismiss}
            simultaneousHandlers={scrollRef}
          />
        ))} */}

      <FlatList
        data={bills}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%" }}
      />
      {/* </ScrollView> */}
    </View>
  );
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
