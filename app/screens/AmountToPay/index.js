import React, { useContext, useEffect } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Header";
import { Colors } from "../../styles/colors";
import { Divider } from "react-native-elements";

import { CommonActions } from "@react-navigation/native";

import uuid from "react-native-uuid";

import { BillContext } from "../../context/BillContext";

const AmountToPay = ({ route, navigation }) => {
  const { totalAmount, tip, people } = route.params;

  const tA = Number(totalAmount);
  const tP = Number(tip);
  const pL = Number(people);

  const grandTotal = Math.round(tA + tA * (tP / 100));

  let customer = {
    myAmount: Math.round(grandTotal / pL),
    mySubtotal: Math.round(grandTotal / pL) - Math.round((tA * tP) / 100 / pL),
    myTip: Math.round((tA * tP) / 100 / pL),
  };

  const customerList = new Array(pL).fill(customer);

  const [bills, setBills] = useContext(BillContext);

  var today = new Date();
  let currentDate =
    today.getDate() +
    "/" +
    parseInt(today.getMonth() + 1) +
    "/" +
    today.getFullYear();

  const addBill = () => {
    setBills((prevBills) => [
      {
        totalAmount: totalAmount,
        id: uuid.v4(),
        date: currentDate,
        tip: tip,
        people: people,
      },
      ...prevBills,
    ]);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "New Split" }],
      })
    );

    navigation.navigate("History");
  };

  // useEffect(() => {
  //   console.log("====================================");
  //   console.log("*** ADDED TO LIST ***");
  //   console.log("====================================");
  //   console.log(bills);
  // }, [bills]);

  useEffect(() => {
    console.log(customerList);
  }, []);

  return (
    <View style={styles.appContainer}>
      <Header title={"To Pay"} backButton={true} navigation={navigation} />

      <View style={{ height: 380, marginBottom: 20 }}>
        <ScrollView>
          {customerList.map((customer, index) => {
            return (
              <View style={styles.customerConainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text style={styles.h2Light}>Customer {index + 1}</Text>
                  <Text style={styles.h2Light}>R{customer.myAmount}</Text>
                </View>
                <Divider
                  orientation="horizontal"
                  width={3}
                  style={{ marginBottom: 18, borderRadius: 30 }}
                  color={Colors.purple}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.h4Light}>Subtotal:</Text>
                  <Text style={styles.h4Light}>R{customer.mySubtotal}</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.h4Light}>Tip:</Text>
                  <Text style={styles.h4Light}>R{customer.myTip}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={addBill} style={styles.button}>
          <Text style={styles.h3Light}>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* <Button onPress={addBill} title="pay now!">
        Pay now
      </Button> */}
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
  h4Light: {
    fontFamily: "VisbyRoundCF-Bold",
    color: Colors.gold,
    fontSize: 12,
    marginBottom: 5,
  },
  h3Light: {
    fontFamily: "VisbyRoundCF-Bold",
    color: Colors.gold,
    fontSize: 16,
    marginBottom: 5,
  },
  h2Light: {
    fontFamily: "VisbyRoundCF-Bold",
    color: Colors.gold,
    fontSize: 18,
    marginBottom: 5,
  },
  btnContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkPurple,
  },
  button: {
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: Colors.purple,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 5,
  },
  customerConainer: {
    width: 320,
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    backgroundColor: Colors.darkPurple,
  },
});

export default AmountToPay;
