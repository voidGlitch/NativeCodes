import React from "react";
import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const NetfllixCard = () => {
  let [fontLoad] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });
  if (!fontLoad) {
    return <AppLoading />;
  }
  return (
    <View style={styles.imgstyles}>
      <Text
        style={{
          padding: 10,
          fontSize: 60,
          textAlign: "center",
          marginTop: 20,
          fontFamily: "JosefinSans_700Bold",
        }}
      >
        Netflix Card
      </Text>
      <View style={styles.poster}>
        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 1,
            marginBottom: 10,
            alignSelf: "center",
          }}
          source={{
            uri: "https://www.pinkvilla.com/files/all_dead_main_0.jpg",
          }}
        />

        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "JosefinSans_500Medium_Italic",
              // letterSpacing: 4,
              textShadowOffset: { width: -3, height: 4 },
              textShadowRadius: 10,
              textShadowColor: "rgb(0,0,0,0.75)",
              textTransform: "capitalize",
            }}
          >
            All of us are Dead
          </Text>
          <Text
            style={{
              color: "gray",
              margin: 10,
              fontFamily: "JosefinSans_300Thin_Italic",
              fontVariant: ["small-caps"],
              //gives the spacing in between the lines
              lineHeight: 20,
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae
            delectus minus, inventore explicabo totam cumque modi culpa odit
            reiciendis libero sunt laborum. Alias, ad! Nostrum est deleniti
            tenetur consequuntur.
          </Text>
        </View>

        <View style={{ marginTop: 5, marginBottom: 10 }}>
          <Button
            title="WatchNow"
            onPress={() => {
              Linking.openURL("https://www.netflix.com/in/");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NetfllixCard;

const styles = StyleSheet.create({
  imgstyles: {
    backgroundColor: "white",
    alignContent: "center",
  },
  poster: {
    display: "flex",
    alignSelf: "center",
    borderWidth: 1,
    width: 300,
    alignItems: "center",
  },
});
