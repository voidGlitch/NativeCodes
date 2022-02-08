import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const NetflixCard = () => {
  const names = [
    {
      name: "archive bt",
      year: "2021",
      creator: "rebecaa",
      genre: "horror",
    },
    {
      name: "all of dead",
      year: "2022",
      creator: "chin ping",
      genre: "zombie",
    },
    {
      name: "heyoo",
      year: "2021",
      creator: "miku",
      genre: "fun",
    },
    {
      name: "friends",
      year: "1995",
      creator: "nbc",
      genre: "fun",
    },
    {
      name: "zid",
      year: "2019",
      creator: "kite",
      genre: "humor",
    },
  ];
  return (
    <View>
      <FlatList
        data={names}
        keyExtractor={(key) => {
          return key.creator;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          console.log(item.name);
          return (
            <View
              style={{
                border: "3px solid black",
                margin: "50px",
                padding: "30px",
              }}
            >
              <Text style={styles.textStyle}>{item.name}</Text>
              <Text style={styles.textStyle}>{item.creator}</Text>
              <Text style={styles.textStyle}>{item.year}</Text>
              <Text style={styles.textStyle}>{item.genre}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default NetflixCard;

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    backgroundColor: "black",
  },
});
