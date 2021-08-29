import React, { useContext, useEffect } from "react";

import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import NumberFormat from "react-number-format";

import { Avatar, Badge } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";
import { assets } from "../../../react-native.config";

import { BillContext } from "../../context/BillContext";

const Home = ({ navigation }) => {
  const [bills, setBills] = useContext(BillContext);

  // let firstBillAmount;

  // useEffect(() => {
  //   firstBillAmount = "No recent transactions";
  // }, []);

  // useEffect(() => {
  //   if (bills != null) {
  //     const firstBillItem = bills[0];
  //     firstBillAmount = firstBillItem.totalAmount;
  //   }
  // }, [bills]);

  return (
    <View style={styles.background}>
      <View style={styles.appContainer}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>Bill Splitter</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <Image
              source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_28.png")}
              resizeMode="contain"
              style={{
                width: 60,
                height: 60,
                position: "absolute",
                zIndex: 1,
                bottom: 30,
                left: 10,
              }}
            />
            <View style={styles.avatarContainer}>
              <View
                style={{
                  backgroundColor: "#363355",
                  width: "100%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  // borderTopRightRadius: 30,
                  // borderTopLeftRadius: 30,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#47436a",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "VisbyRoundCF-Bold",
                    fontSize: 10,
                  }}
                >
                  Gino
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainContainerHeader}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.h4}>Total Bill</Text>
              <Text style={styles.h4}>Split With</Text>
            </View>
            <Text style={styles.h2}>R750.56</Text>
          </View>
          <View style={styles.mainSplitWith}>
            <ScrollView contentContainerStyle={{ padding: 10 }}>
              <Avatar
                rounded
                size="small"
                source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_37.png")}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={styles.avatarIconSmall}
              />
              <Avatar
                rounded
                size="small"
                source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_47.png")}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={styles.avatarIconSmall}
              />
              <Avatar
                rounded
                size="small"
                source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_32.png")}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={styles.avatarIconSmall}
              />
              <Avatar
                rounded
                size="small"
                source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_8.png")}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={styles.avatarIconSmall}
              />
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Split Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historyContainer}>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => navigation.navigate("History")}
          >
            <Icon name="exclamationcircleo" style={styles.icon}></Icon>
          </TouchableOpacity>
          <View>
            <Text style={styles.h4Light}>Your Previous Split</Text>
            {bills[0] ? (
              <NumberFormat
                value={Number(bills[0].totalAmount)}
                renderText={(value) => (
                  <Text style={styles.h4Grey}>{value}</Text>
                )}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R"}
              />
            ) : (
              <Text style={styles.h4Grey}>No recent transactions</Text>
            )}

            {/* 
            <NumberFormat value={Number(bills[0].totalAmount)} displayType={'text'} thousandSeparator={true} prefix={'R'} />
            <Text style={styles.h4Grey}>
              {bills[0] ? `R${bills[0].totalAmount}` : "No recent transactions"}
            </Text> */}
          </View>
        </View>
        <View style={styles.friendsContainer}>
          <View style={styles.friendsHeader}>
            <Text style={styles.h4Light}>Nearby Friends</Text>
            <TouchableOpacity>
              <Text style={styles.h4Grey}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            centerContent={true}
            contentContainerStyle={styles.friendsContent}
          >
            <Avatar
              rounded
              size="large"
              source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_32.png")}
              onPress={() => console.log("Works!")}
              activeOpacity={0.5}
              containerStyle={styles.avatarIcon}
            >
              <Badge
                status="success"
                badgeStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                }}
                containerStyle={{ position: "absolute", top: 4, right: 0 }}
              />
            </Avatar>
            <Avatar
              rounded
              size="large"
              source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_28.png")}
              onPress={() => console.log("Works!")}
              activeOpacity={0.5}
              containerStyle={styles.avatarIcon}
            >
              <Badge
                status="success"
                badgeStyle={{ width: 15, height: 15, borderRadius: "50%" }}
                containerStyle={{ position: "absolute", top: 4, right: 0 }}
              />
            </Avatar>
            <Avatar
              rounded
              size="large"
              source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_8.png")}
              onPress={() => console.log("Works!")}
              activeOpacity={0.5}
              containerStyle={styles.avatarIcon}
            >
              <Badge
                status="success"
                badgeStyle={{ width: 15, height: 15, borderRadius: "50%" }}
                containerStyle={{ position: "absolute", top: 4, right: 0 }}
              />
            </Avatar>
            <Avatar
              rounded
              size="large"
              source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_37.png")}
              onPress={() => console.log("Works!")}
              activeOpacity={0.5}
              containerStyle={styles.avatarIcon}
            >
              <Badge
                status="success"
                badgeStyle={{ width: 15, height: 15, borderRadius: "50%" }}
                containerStyle={{ position: "absolute", top: 4, right: 0 }}
              />
            </Avatar>
            <Avatar
              rounded
              size="large"
              source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_47.png")}
              onPress={() => console.log("Works!")}
              activeOpacity={0.5}
              containerStyle={styles.avatarIcon}
            >
              <Badge
                status="success"
                badgeStyle={{ width: 15, height: 15, borderRadius: "50%" }}
                containerStyle={{ position: "absolute", top: 4, right: 0 }}
              />
            </Avatar>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#47436a",
  },
  appContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 35,
    paddingTop: 40,
  },
  avatar: {
    backgroundColor: "grey",
  },
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
  h2: {
    fontFamily: "VisbyRoundCF-Heavy",
    color: "#47436a",
    fontSize: 35,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -10,
  },
  appTitle: {
    fontFamily: "VisbyRoundCF-Bold",
    fontSize: 30,
    textAlign: "left",
    color: "#e7c294",
  },
  avatarContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 25,
    overflow: "hidden",
  },
  mainContainer: {
    width: 320,
    height: 210,
    paddingVertical: 25,
    paddingHorizontal: 30,
    backgroundColor: "#e7c294",
    justifyContent: "space-between",
    borderRadius: 40,
    // borderTopEndRadius: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  mainContainerHeader: {
    height: 70,
    // flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
  },
  mainSplitWith: {
    position: "absolute",
    top: 55,
    left: 220,
    width: 65,
    height: 129,
    // padding: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
    zIndex: 1,
    // overflow: "hidden",
  },
  historyContainer: {
    width: 320,
    height: 80,
    padding: 20,
    marginBottom: -10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#363355",
    borderRadius: 30,
  },
  friendsContainer: {
    width: 320,
    height: 220,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363355",
    borderRadius: 30,
  },
  friendsHeader: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  friendsContent: {
    height: "85%",
    paddingBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    overflow: "scroll",
  },
  button: {
    width: 120,
    height: 60,
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
  infoButton: {
    width: 50,
    height: 50,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#47436a",
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
    color: "#e7c294",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 1,
  },
  buttonText: {
    fontFamily: "VisbyRoundCF-Bold",
    color: "#e7c294",
    fontSize: 16,
  },
  avatarIcon: {
    backgroundColor: "#e7c294",
    marginRight: 10,
    marginLeft: 10,
    borderColor: "grey",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  avatarIconSmall: {
    backgroundColor: "#e7c294",
    marginBottom: -5,
    // marginLeft: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Home;
