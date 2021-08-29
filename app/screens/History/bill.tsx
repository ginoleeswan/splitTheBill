import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../../styles/colors";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

const LIST_ITEM_HEIGHT = 180;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const Bill = ({
  bill,
  id,
  catagory,
  totalAmount,
  people,
  tip,
  date,
  onDismiss,
  simultaneousHandlers,
}) => {
  const theTip = `${tip}%`;

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: () => {
      console.log(id);
    },
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(bill);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    return { opacity };
  });

  const rTasksContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.billMainContainer, rTasksContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <Ionicons
          name={"trash-outline"}
          size={LIST_ITEM_HEIGHT * 0.3}
          color={"#ef614a"}
        />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View style={[styles.billContainer, rStyle]} key={id}>
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
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  billMainContainer: {
    width: "100%",
    alignItems: "center",
  },
  billContainer: {
    width: 250,
    height: LIST_ITEM_HEIGHT,
    padding: 25,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkPurple,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
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
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: "-10%",
  },
});

export default Bill;
