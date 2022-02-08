import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import React from "react";

const TouchableOp = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log("join here");
          Alert.alert("congo");
        }}
      >
        {/* image as a button */}
        <Image
          style={styles.imagess}
          source={require("../../assets/emma.jpeg")}
        />
        <Text>Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOp;

const styles = StyleSheet.create({
  imagess: {
    width: 300,
    height: 300,
  },
});
