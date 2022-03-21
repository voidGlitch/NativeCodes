import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [Agree, setAgree] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  console.log(username);
  console.log(password);

  const submit = () => {
    if (username === "miku" && password === "miku") {
      Alert.alert(`congratulations${username}`);
      navigation.navigate("Home", { myName: `${username}` });
    } else {
      Alert.alert("Sorry");
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text styles={styles.maintext}>Login Form</Text>
      <Text style={styles.description}>
        You can reach us anytime you want via @official.shreshthav@gmail.com
      </Text>
      <View>
        <Text>Username</Text>
        <TextInput
          style={styles.inputStyles}
          autoCorrect={false}
          autoCapitalize="none"
          value={username}
          onChangeText={(data) => {
            setusername(data);
          }}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          style={styles.inputStyles}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={(data) => {
            setpassword(data);
          }}
        />
      </View>
      <View style={{ marginTop: 15, width: "100%" }}>
        <Checkbox
          value={Agree}
          onChange={() => {
            setAgree(!Agree);
          }}
          color={Agree ? "blue" : "black"}
          style={{}}
        />
        <Text>I have Agreed to All T&C</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.login,
          {
            backgroundColor: Agree ? "blue" : "grey",
          },
        ]}
        disabled={!Agree}
        onPress={() => submit()}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    height: "100%",
    paddingHorizontal: 30,
    paddingBottom: 30,
    backgroundColor: "#fff",
  },
  description: {
    marginTop: 15,
    color: "grey",
    marginVertical: 20,
  },
  maintext: {
    textAlign: "center",
  },

  inputStyles: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
  },
  login: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    padding: 3,
  },
});
