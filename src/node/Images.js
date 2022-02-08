import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Images = () => {
  return (
    <View style={styles.imgstyle}>
      <Text style={styles.textStyle}>This is image</Text>
      <Image
        style={styles.imagestyles}
        source={require("../../assets/emma.jpeg")}
      />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  imgstyle: {
    margin: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
  imagestyles: {
    width: 300,
    height: 300,
  },
});
