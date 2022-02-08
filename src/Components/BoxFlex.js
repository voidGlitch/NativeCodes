import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxFlex = () => {
  return (
    <View style={styles.align}>
      <Text style={[styles.box1, styles.common]}>box 1</Text>
      <Text style={[styles.box2, styles.common]}>box 2</Text>
      <Text style={[styles.box3, styles.common]}>box 3</Text>
      <Text style={[styles.box4, styles.common]}>box 4</Text>
      <Text style={[styles.box5, styles.common]}>box 5</Text>
    </View>
  );
};

export default BoxFlex;

const styles = StyleSheet.create({
  align: {
    height: 400,
    width: "95%",
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 4,
    //by defalut column
    // flexDirection: "column-reverse",
    flexDirection: "row",
    //this will make it horizontally center but in case of row it will make horizonatl center and align item vice-versa
    // justifyContent: "center",
    //put the body at the start row and column can vary
    // justifyContent: "flex-start",
    //put the body at the start row and column can cause difference
    // justifyContent: "flex-end",
    //put the equal spaces between the objects
    // justifyContent: "space-between",
    //puts the space in even manner from top to bottom
    justifyContent: "space-evenly",
    //put the equal space but only difference is a little space at top and bottom
    // justifyContent: "space-around",
    //this is to make the content center vertically.
    //Same property of justify content just no spaces
    //stretches the items it is by defaylt if we didn't give the width.Flex will also give the obj that much amt that the value text want
    alignItems: "stretch",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "green",
  },
  box2: {
    backgroundColor: "red",
    //if you want to play around with the position but in only its row or column
    alignSelf: "flex-end",
  },
  box3: {
    backgroundColor: "yellow",
  },
  box4: {
    backgroundColor: "pink",
  },
  box5: {
    backgroundColor: "blue",
  },
  common: {
    width: 60,
    height: 60,
    textAlign: "center",
    paddingVertical: 15,
    borderWidth: 1,
  },
});
