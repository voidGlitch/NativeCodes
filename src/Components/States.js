import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const States = () => {
  const [count, setcount] = useState(0);
  //counter is read only you cannot update it
  return (
    <View style={styles.align}>
      <Text>States</Text>
      <View style={[styles.box]}>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity
          style={[styles.boxing]}
          onPress={() => {
            setcount(count + 10);
          }}
        >
          <Text style={styles.textarea}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ marginTop: 30 }, styles.boxing]}
          onPress={() => {
            setcount(0);
          }}
        >
          <Text style={styles.textarea}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ margin: 30 }, styles.boxing]}
          onPress={() => {
            if (count === 0) {
              return setcount(0);
            }
            setcount(count - 10);
          }}
        >
          <Text style={styles.textarea}>-10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default States;

const styles = StyleSheet.create({
  align: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "90%",
  },
  boxing: {
    width: "50%",
    height: 50,
    textAlign: "center",
  },
  count: {
    color: "black",
    fontSize: 100,
  },
  textarea: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    width: "100%",
    height: "100%",
    textAlignVertical: "center",
    fontSize: 30,
  },
});
