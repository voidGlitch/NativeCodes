import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ route, navigation }) => {
  const { myName } = route.params;
  return (
    <View>
      <Text>Welcome {myName}</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
