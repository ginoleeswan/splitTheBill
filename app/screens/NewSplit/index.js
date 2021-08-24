import React, { useState, useEffect, useContext } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "@use-expo/font";
import uuid from "react-native-uuid";
// import Animated from "react-native-reanimated";
import AppLoading from "expo-app-loading";
import { TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Slider from "../../components/Slider";

import { BillContext } from "../../context/BillContext";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import Header from "../../components/Header";

import { Colors } from "../../styles/colors";

// const { width: totalWidth } = Dimensions.get("window");
// const { Value, add } = Animated;
// const count = 5;
// const width = totalWidth / count;
// const height = width;

const NewSplit = ({ navigation }) => {
  const [bills, setBills] = useContext(BillContext);

  const [totalAmount, setTotalAmount] = useState("");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  var today = new Date();
  let currentDate =
    today.getDate() +
    "/" +
    parseInt(today.getMonth() + 1) +
    "/" +
    today.getFullYear();

  const addBill = (e) => {
    e.preventDefault();
    if (totalAmount != null) {
      setBills((prevBills) => [
        ...prevBills,
        { totalAmount: totalAmount, id: uuid.v4(), date: currentDate },
      ]);
    }
    setTotalAmount("");
  };

  //   const x = new Value(0);
  let [fontsLoaded] = useFonts({
    "VisbyRoundCF-Regular": require("../../assets/fonts/VisbyRoundCF-Regular.ttf"),
    "VisbyRoundCF-Bold": require("../../assets/fonts/VisbyRoundCF-Bold.ttf"),
    "VisbyRoundCF-DemiBold": require("../../assets/fonts/VisbyRoundCF-DemiBold.ttf"),
    "VisbyRoundCF-Medium": require("../../assets/fonts/VisbyRoundCF-Medium.ttf"),
    "VisbyRoundCF-Heavy": require("../../assets/fonts/VisbyRoundCF-Heavy.ttf"),
    "VisbyRoundCF-ExtraBold": require("../../assets/fonts/VisbyRoundCF-ExtraBold.ttf"),
  });

  const handleSplitEqual = () => {
    console.log(totalAmount);
  };

  useEffect(() => {
    console.log(bills);
  }, [bills]);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.appContainer} keyboardShouldPersistTaps="handled">
        <Header title={"New Split"} />
        <ScrollView
          contentContainerStyle={styles.appContainerScroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.paymentInfoContainer}>
            <Text
              style={{ ...styles.h4Light, marginBottom: 20, marginLeft: 10 }}
            >
              Total Amount
            </Text>
            <View style={styles.paymentInfoRow}>
              <View style={styles.infoButton}>
                <Icon name="receipt" style={styles.icon}></Icon>
              </View>
              <KeyboardAvoidingView>
                <TextInput
                  value={totalAmount}
                  onChangeText={setTotalAmount}
                  placeholder="Enter Bill Amount"
                  placeholderTextColor="grey"
                  keyboardType="numeric"
                  returnKeyType="next"
                  maxLength={8}
                  style={styles.textInput}
                />
              </KeyboardAvoidingView>
            </View>
            <View>
              <Text
                style={{ ...styles.h4Light, marginBottom: 20, marginLeft: 10 }}
              >
                Tip
              </Text>
              <Slider count={4} multiplier={10} init={10} percent={true} />
            </View>
            <View>
              <Text
                style={{ ...styles.h4Light, marginBottom: 20, marginLeft: 10 }}
              >
                Number Of People
              </Text>
              <Slider count={8} multiplier={1} init={1} percent={false} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View style={styles.btnBackground}>
                <TouchableOpacity style={styles.nextBtn} onPress={addBill}>
                  <Text style={styles.h4Light}>Split Equally</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnBackground2}>
                <TouchableOpacity style={styles.nextBtn}>
                  <Text style={styles.h4Light}>Enter Items</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  h4: {
    fontFamily: "VisbyRoundCF-Bold",
    color: "#47436a",
    fontSize: 15,
  },
  h4Light: {
    fontFamily: "VisbyRoundCF-Bold",
    color: "#e7c294",
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
  appContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: 35,
    paddingTop: 60,
    overflow: "hidden",
    backgroundColor: Colors.purple,
  },
  appContainerScroll: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: 35,
    overflow: "hidden",
    backgroundColor: Colors.purple,
  },
  paymentInfoContainer: {
    marginBottom: 5,
  },
  paymentInfoRow: {
    width: 320,
    height: 80,
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.darkPurple,
    borderRadius: 50,
    overflow: "hidden",
  },
  infoButton: {
    width: 60,
    height: 60,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.purple,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 5,
  },
  icon: {
    color: Colors.gold,
    fontSize: 25,
    // width: "100%",
    textAlign: "center",
    marginLeft: 1,
  },
  textInput: {
    fontFamily: "VisbyRoundCF-Bold",
    alignItems: "center",
    color: Colors.white,
    width: "100%",
    overflow: "hidden",
  },
  btnBackground: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkPurple,
  },
  btnBackground2: {
    position: "absolute",
    top: 30,
    left: 160,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundColor: Colors.darkPurple,
  },
  nextBtn: {
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
});

export default NewSplit;
