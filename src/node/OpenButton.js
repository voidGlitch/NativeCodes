import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const OpenButton = () => {
  return (
    <View>
      <Text style={styles.text}> hey there</Text>
      <Button
        title="JoinNow"
        onPress={() => {
          console.log("here buddy!");
          Alert.alert("Liked it?");
        }}
        // disabled
      />
    </View>
  );
};

export default OpenButton;

const styles = StyleSheet.create({
  text: {
    margin: 100,
    textAlign: "center",
    fontSize: 30,
  },
  btn: {
    marginBottom: 30,
  },
});
