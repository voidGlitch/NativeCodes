//Import Libraries to create componts
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Images from "./src/node/Images";
import List from "./src/node/List";
import NetflixCard from "./src/node/NetflixCard";
import Random from "./src/node/Random";

//create a compont that return some jsx
const App = () => {
  const name = "miku";
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
      <NetflixCard />
      <Images />4
    </View>
  );
};

//create a style sheet to style components
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
  },
});
//export the file
export default App;
