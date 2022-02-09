import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxFlex = () => {
  return (
    <View style={styles.align}>
      <Text style={[styles.box1, styles.common]}>box 1</Text>
      <Text style={[styles.box2, styles.common]}>box 2</Text>
      <Text style={[styles.box3, styles.common]}>box 3</Text>
      <Text style={[styles.box4, styles.common]}>box 4</Text>
      <View style={styles.subChild}>
        <Text style={[styles.box5, styles.common]}>box 5</Text>
      </View>
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
    //for setting the property of the parent component and rest of the changes are applied on the child components
    position: "relative",
    //by defalut column
    // flexDirection: "column-reverse",
    // flexDirection: "row",
    //this will make it horizontally center but in case of row it will make horizonatl center and align item vice-versa
    // justifyContent: "center",
    //put the body at the start row and column can vary
    // justifyContent: "flex-start",
    //put the body at the start row and column can cause difference
    // justifyContent: "flex-end",
    //put the equal spaces between the objects
    // justifyContent: "space-between",
    //puts the space in even manner from top to bottom
    // justifyContent: "space-evenly",
    //put the equal space but only difference is a little space at top and bottom
    // justifyContent: "space-around",
    //this is to make the content center vertically.
    //Same property of justify content just no spaces
    //stretches the items it is by defaylt if we didn't give the width.Flex will also give the obj that much amt that the value text want
    // alignItems: "stretch",
    // alignItems: "center",
  },
  box1: {
    backgroundColor: "green",
  },
  box2: {
    backgroundColor: "red",
    //if you want to play around with the position but in only its row or column
    // alignSelf: "flex-end",
    //if a comp having position absolute having parent relative then that comp can use lef,right ,top and bottom properties
    position: "absolute",
    //put the object at the starting of right
    right: 0,
  },
  box3: {
    backgroundColor: "yellow",
    //make the element at the bottom
    bottom: 0,
  },
  box4: {
    //to make the element at the right bottom we need to first
    bottom: 0,
    //then
    right: 0,
    backgroundColor: "pink",
  },
  box5: {
    backgroundColor: "blue",
    //you are thing it is at center but its ❌not so it can move item in the div but doesn't make it proper center so todo that we need flex box property
    // bottom: "45%",
    // right: "45%",
    //by default we are at column direction so it is only making horizonally center you might think we use justify center but it only works for the whole flex comp not to there child.So What to do now
    // alignSelf: "center",
    //Now i have an idea why not create a view component and our own flex component
  },
  subChild: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    //You might wondering why is it not working it is because we havent't give that div any height and width so put the heightand width same as the div
    justifyContent: "center",
    //align items make the element center in opposite direction i.e if i have flex-direction of row then it will work on column direction and vice,vesa
    alignItems: "center",
  },
  common: {
    width: 60,
    height: 60,
    textAlign: "center",
    //gives some space inside the border in vertical manner
    paddingVertical: 15,
    borderWidth: 1,
    //passing absolute to all the text comp by default they are at same position stagged at each other
    position: "absolute",
  },
});
