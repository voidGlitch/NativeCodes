//Import Libraries to create componts
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BoxFlex from "./src/Components/BoxFlex";
import NetfllixCard from "./src/Components/NetfllixCard";
import Images from "./src/node/Images";
import OpenButton from "./src/node/OpenButton";
import TouchableOp from "./src/node/TouchableOp";
// import List from "./src/node/List";
// import NetflixCard from "./src/node/NetflixCard";
// import Random from "./src/node/Random";

//create a compont that return some jsx
const App = () => {
  return (
    <View>
      {/* <Text style={styles.textStyle}>Hello world</Text>
      <Text style={{ fontWeight: "bold", fontSize: 40, color: "green" }}>
        Welcome here
      </Text>
      <Text style={{ fontSize: 30 }}>
        WeLove react native and i am subscriber of thapa technical
      </Text>
      <Text>Hi my name is {name} </Text>
      <Random/> */}
      {/* <List/> */}
      {/* <NetflixCard /> */}
      {/* <Images /> */}
      {/* <View style={styles.textStyles}>
        <NetfllixCard />
      </View> */}
      <BoxFlex />
      {/* <OpenButton /> */}
      {/* <TouchableOp /> */}
    </View>
  );
};

//export the file
export default App;
//create a style sheet to style components
const styles = StyleSheet.create({
  textStyles: {
    display: "flex",
    alignItems: "center",
    // alignItem: "center",
    // alignItem: "center",
  },
});
