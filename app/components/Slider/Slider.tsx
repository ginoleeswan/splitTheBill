import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

import Cursor from "./Cursor";
import Labels from "./Labels";

const { Value, max, add } = Animated;

// const { width: totalWidth } = Dimensions.get("window");
const totalWidth = 320;
// const count = 4;
// const width = totalWidth / count;
const height = 80;

export default ({ count, multiplier, init, percent, name }) => {
  const x = new Value(0);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          right: 0,
          backgroundColor: "#e7c294",
          width: add(max(x, 0), 320 / count),
          height: 60,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      />
      <Labels size={height} {...{ x, count, multiplier, init, percent }} />
      <Cursor
        size={height}
        {...{ x, count, multiplier, init, percent, name }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: totalWidth,
    height,
    marginBottom: 20,
    // padding: 10,
    // marginBottom: 20,
    // flexDirection: "row",
    // alignItems: "center",
    backgroundColor: "#363355",
    borderRadius: 50,
    // overflow: "hidden",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     width: totalWidth,
//     height,
//     borderRadius: height / 2,
//     backgroundColor: "#f1f2f6",
//   },
// });
