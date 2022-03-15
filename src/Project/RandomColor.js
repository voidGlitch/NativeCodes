import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
const RandomColor = () => {
  const [newColor, setNewColor] = useState([]);
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View style={{ marginTop: 100 }}>
      <TouchableOpacity
        onPress={() => {
          // Alert.alert(randomColor());
          //remember to put inside an array and apply spread operator
          setNewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.Textborder}>Generate Random Color</Text>
      </TouchableOpacity>
      <FlatList
        //represents the data of the array
        data={newColor}
        //unique key to show
        keyExtractor={(key) => key}
        //each item from that array to be render
        //note: destructure the item from the element
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item,
                  height: 100,
                  borderRadius: 5,
                  margintop: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Text>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default RandomColor;

const styles = StyleSheet.create({
  Textborder: {
    backgroundColor: "#00b0ff",
    position: "relative",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});
