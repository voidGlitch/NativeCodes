import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Hookeffect = () => {
  const [userdata, setuserdata] = useState();
  const [isloading, setisloading] = useState(false);
  const getUserData = async () => {
    try {
      setisloading(true);
      const apidata = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const posts = await apidata.json();
      setuserdata(posts);
      console.log(posts);
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hookeffect</Text>
      <FlatList
        data={userdata}
        renderItem={({ item }) => {
          return (
            <View style={styles.box}>
              <View style={styles.containerimg}>
                <Image
                  source={{ uri: item.url }}
                  resizeMode="center"
                  style={styles.Image}
                />
              </View>
              <View style={{ position: "relative", left: 15, bottom: 30 }}>
                <Text style={{ position: "absolute", bottom: 150, left: 150 }}>
                  Id : {item.id}
                </Text>
                <Text style={{ fontSize: 13 }}>Title : {item.title}</Text>
                <Text>Body : {item.body}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Hookeffect;

const styles = StyleSheet.create({
  Image: {
    height: 500,
    width: 500,
    minHeight: "100%",
  },
  containerimg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    width: 400,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    marginBottom: 50,
  },
});
