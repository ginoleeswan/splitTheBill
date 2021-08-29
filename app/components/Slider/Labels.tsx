import * as React from "react";
import { StyleSheet, View } from "react-native";
import { mixColor } from "react-native-redash/lib/module/v1";
import Animated from "react-native-reanimated";

const { cond, lessOrEq, add, round, divide } = Animated;

interface LabelProps {
  x: Animated.Value<number>;
  count: number;
  size: number;
  multiplier: number;
  init: number;
  percent: boolean;
}

export default ({ count, x, size, multiplier, init, percent }: LabelProps) => {
  const index = add(round(divide(x, size)), 1);
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flexDirection: "row",
        padding: 10,

        alignItems: "center",
        width: 320,
      }}
    >
      {new Array(count).fill(0).map((e, i) => {
        const color = mixColor(
          cond(lessOrEq(index, i), 0, 1),
          "gray",
          "#363355"
        );
        return (
          <View
            key={i}
            style={{
              flex: 1,
              // width: 320,
              // flexDirection: "row",
              // justifyContent: "space-evenly",
            }}
          >
            <Animated.Text
              style={{
                color,
                textAlign: "center",
                fontSize: 20,
                fontFamily: "VisbyRoundCF-Bold",
              }}
            >
              {`${i * multiplier + init}${percent ? "%" : ""}`}
            </Animated.Text>
          </View>
        );
      })}
    </View>
  );
};
