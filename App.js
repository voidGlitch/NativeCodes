//Import Libraries to create componts
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoxFlex from "./src/Components/BoxFlex";
import NetfllixCard from "./src/Components/NetfllixCard";
import States from "./src/Components/States";
import Images from "./src/node/Images";
import OpenButton from "./src/node/OpenButton";
import TouchableOp from "./src/node/TouchableOp";
import Hookeffect from "./src/Project/Hookeffect";
import Contact from "./src/Project/Login/Contact";
import RandomColor from "./src/Project/RandomColor";
import Home from "./src/Project/Login/Home";
// import List from "./src/node/List";
// import NetflixCard from "./src/node/NetflixCard";
// import Random from "./src/node/Random";

//create a compont that return some jsx
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.textStyles}>
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
      {/* <BoxFlex /> */}
      {/* <States /> */}
      {/* <OpenButton /> */}
      {/* <TouchableOp /> */}
      {/* <RandomColor /> */}
      {/* <Hookeffect /> */}
      <NavigationContainer>
        {/* sets the intital page  */}
        <Stack.Navigator initialRouteName="contact">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
//export the file
export default App;
//create a style sheet to style components
const styles = StyleSheet.create({
  textStyles: {
    marginTop: 50,
  },
});
