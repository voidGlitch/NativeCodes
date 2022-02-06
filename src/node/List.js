import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

const List = () => {
  const names = [
    { index: "1", name: "helo" },
    { index: "2", name: "my" },
    { index: "3", name: "name" },
    { index: "4", name: "is" },
    { index: "5", name: "miku" },
  ];
  return (
    <FlatList
      data={names}
      horizontal
      //if you want first one at last and last one at first then work on phone only
      inverted
      // numColumns={2}
      showsHorizontalScrollIndicator={false}
      //if in future if we got a api which has unique value as some other name then we pass this prop to give that title as name of key so that we dont get an error
      keyExtractor={(key) => {
        return key.index;
      }}
      renderItem={({ item }) => {
        console.log(item.index);
        return <Text style={style.textStyle}>{item.name}</Text>;
      }}
    />
  );
};
const style = StyleSheet.create({
  textStyle: {
    color: "red",
    border: "3px solid black",
    margin: "50px",
  },
});

export default List;
