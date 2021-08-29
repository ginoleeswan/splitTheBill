import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { Avatar, Badge } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import PaymentCard from "../../components/PaymentCard";

const Profile = ({ navigation: { goBack } }) => {
  return (
    <View style={styles.background}>
      <View style={styles.appContainer}>
        <View style={styles.header}>
          <TouchableHighlight style={styles.backBtn} onPress={() => goBack()}>
            <Icon name="chevron-back" style={styles.backIcon}></Icon>
          </TouchableHighlight>
          <Text style={styles.appTitle}>Profile</Text>
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            borderRadius: 50,
            marginBottom: 30,
          }}
        >
          <Avatar
            rounded
            icon={{
              name: "camera",
              type: "font-awesome",
              color: "#363355",
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{
              position: "absolute",
              top: -5,
              right: -5,
              width: 38,
              height: 38,
              borderRadius: "50%",
              backgroundColor: "#e7c294",
              zIndex: 1,
            }}
          />

          <Image
            source={require("../../assets/images/avatars/ToyFaces_Tansparent_BG_28.png")}
            resizeMode="contain"
            style={{
              width: 120,
              height: 120,
              position: "absolute",
              zIndex: 1,
              bottom: 60,
              left: 20,
            }}
          />

          <View style={styles.avatarContainer}>
            <View
              style={{
                backgroundColor: "#363355",
                width: "100%",
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                //   borderTopRightRadius: 30,
                //   borderTopLeftRadius: 30,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#47436a",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "VisbyRoundCF-Bold",
                  fontSize: 25,
                }}
              >
                Gino
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileInfoRow}>
            <View style={styles.infoButton}>
              <Icon name="person" style={styles.icon}></Icon>
            </View>
            <View>
              <Text style={styles.h4Light}>Name</Text>
              <Text style={styles.h4Grey}>Gino Swanepoel</Text>
            </View>
          </View>
          <View style={styles.profileInfoRow}>
            <View style={styles.infoButton}>
              <Icon name="mail" style={styles.icon}></Icon>
            </View>
            <View>
              <Text style={styles.h4Light}>Email</Text>
              <Text style={styles.h4Grey}>ginoleemusic@live.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.paymentInfoContainer}>
          <View style={styles.subTitle}>
            <Text style={styles.subTitleText}>Payment</Text>
          </View>
          <ScrollView horizontal={true} style={styles.paymentInfoContent}>
            <View style={styles.paymentInfoColumn}>
              <Text style={styles.h4White}>Visa Card</Text>
              <Text style={styles.h4Light}>*2345</Text>
              <PaymentCard
                name={"Gino Swanepoel"}
                number={"2033 5010 2512 4921"}
                date={"12/24"}
              />
            </View>
            <View style={styles.paymentInfoColumn}>
              <Text style={styles.h4White}>Master Card</Text>
              <Text style={styles.h4Light}>*8302</Text>
              <PaymentCard
                name={"Bernie Swanepoel"}
                number={"2033 0330 4412 9032"}
                date={"09/21"}
              />
            </View>
            <View style={styles.paymentInfoColumn}>
              <Text style={styles.h4White}>Visa Card</Text>
              <Text style={styles.h4Light}>*3252</Text>
              <PaymentCard
                name={"Clive Swanepoel"}
                number={"3403 8210 6522 9821"}
                date={"03/22"}
              />
            </View>
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
    color: "#fff",
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
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 35,
    paddingTop: 60,
    overflow: "hidden",
  },
  backBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#363355",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 35,
    marginBottom: 30,
    alignItems: "center",
  },
  subTitle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 35,
    marginBottom: 20,
  },
  appTitle: {
    fontFamily: "VisbyRoundCF-Bold",
    fontSize: 30,
    alignSelf: "center",
    textAlign: "right",
    color: "#e7c294",
  },
  subTitleText: {
    fontFamily: "VisbyRoundCF-Bold",
    fontSize: 20,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#e7c294",
  },
  avatarContainer: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileInfoContainer: {
    marginBottom: 5,
  },
  profileInfoRow: {
    width: 320,
    height: 80,
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#363355",
    borderRadius: 50,
  },
  infoButton: {
    width: 60,
    height: 60,
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
    fontSize: 25,
    // width: "100%",
    textAlign: "center",
    marginLeft: 1,
  },
  backIcon: {
    color: "#e7c294",
    fontSize: 35,
    // width: "100%",
    textAlign: "center",
    marginLeft: 1,
  },
  paymentInfoContainer: {
    // position: "absolute",
    width: "100%",
    alignItems: "flex-start",
  },
  paymentInfoContent: {
    flexDirection: "row",
    // overflow: "hidden",
    // position: "absolute",
  },
  paymentInfoColumn: {
    width: 220,
    height: 500,
    padding: 25,
    marginHorizontal: 30,

    backgroundColor: "#363355",
    borderRadius: 40,
    // overflow: "hidden",
  },
});

export default Profile;
