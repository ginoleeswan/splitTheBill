import * as React from "react";
import { StyleSheet } from "react-native";
import { ReText, clamp, snapPoint } from "react-native-redash/lib/module/v1";
import { timing, onGestureEvent } from "react-native-redash/lib/module/v1";
import Animated, {
  cond,
  eq,
  floor,
  lessThan,
  modulo,
  set,
  call,
  useCode,
  useValue,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { useEffect, useContext, useState } from "react";

import { ScrollContext } from "../../config/config";
import { SliderContext } from "../../context/SliderContext";

const { Value, round, divide, concat, add, multiply } = Animated;

export default ({ size, count, x, multiplier, init, percent, name }) => {
  const snapValue = 240 / (count - 1);
  const snapPoints = new Array(count).fill(0).map((e, i) => i * snapValue);
  const index = round(divide(x, snapValue));
  const translationX = useValue(0);
  const velocityX = useValue(0);
  const state = useValue(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({ state, translationX, velocityX });
  const offset = useValue(0);
  const value = add(offset, translationX);
  const translateX = clamp(
    cond(
      eq(state, State.END),
      set(
        offset,
        timing({
          from: value,
          to: snapPoint(value, velocityX, snapPoints),
        })
      ),
      value
    ),
    0,
    240
    // (count - 1) * size
  );
  useCode(() => set(x, translateX), [x, translateX]);

  const [slider, setSliders] = useContext(SliderContext);

  let currentNumber = add(multiply(index, multiplier), init);

  const handleStateChange = () => {
    if (name === "tip") {
      setSliders({ tip: currentNumber });
    } else if (name === "people") {
      setSliders({ people: currentNumber });
    }

    // console.log(slider.tip);

    // setScroll(true);

    // else if (
    //   nativeEvent.state === State.ACTIVE ||
    //   nativeEvent.state === State.BEGAN
    // ) {
    //   // setScroll(false);
    // }
  };

  const [scroll, setScroll] = useContext(ScrollContext);

  // const [tip, setTip] = useValue(0);
  // const [people, setPeople] = useState(0);

  // useCode(() => {
  //   return call([currentNumber], (currentNumber) => {
  //     // if (name === "tip") {
  //     //   setSliders({ tip: currentNumber });
  //     // } else if (name === "people") {
  //     //   setSliders({ people: currentNumber });
  //     // }

  //     console.log(currentNumber);
  //     // console.log(slider.tip);
  //   });
  // }, [currentNumber]);

  // useEffect(() => {
  //   console.log(snapPoints);
  // }, []);

  // useEffect(() => {
  //   console.log(slider.tip);
  // }, [slider.tip]);

  return (
    <PanGestureHandler
      {...gestureHandler}
      enabled={true}
      onHandlerStateChange={handleStateChange}
    >
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          position: "absolute",
          top: 10,
          left: 10,
          width: 320 / count,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#47436a",
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 6,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 5,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateX: x }],
        }}
      >
        <ReText
          style={{
            color: "#e7c294",
            fontSize: 20,
            fontFamily: "VisbyRoundCF-Bold",
          }}
          text={concat(
            add(multiply(index, multiplier), init),
            `${percent ? "%" : ""}`
          )}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  cursor: {
    width: 60,
    height: 60,
    marginRight: 20,

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
});
