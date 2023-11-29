import { useSignIn, useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { styles } from "../../app/styles";

function Login() {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });
  const [isPressed, setIsPressed] = useState(false); //equivalent of hover effect in web
  const [isEmailFocused, setIsEmailFocused] = useState(false); //text input active highlight
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const { signIn, setActive, isLoaded } = useSignIn();
  const { isSignedIn } = useUser();

  function handleChangeData(element, value) {
    setFormDetails((prev) => {
      return { ...prev, [element]: value };
    });
  }

  async function login(email, password) {
    console.log("login()");
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });
      await setActive({ session: completeSignIn.createdSessionId });
      console.log("signed in");
      router.replace("/");
    } catch (error) {
      console.log(error);
      Alert.alert("Login failed! Please check your details again!");
    }
  }

  async function handleSubmit() {
    await login(formDetails.email, formDetails.password);
  }

  const handleTestLogin = async () => {
    await login("gayuoni@hotmail.com", "ShitMicrosoft112");
  };

  const handleFailedLogin = async () => {
    await login("a@b.com", "sdfsdf");
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Keyboard avoiding view needed for shifting login page up when keyboard is activated */}
      {/* Take note of the synthax for styles file in native  */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.innerLoginView]}>
          <Image
            source={require("../../assets/icon.png")}
            style={[styles.logo]}
          />

          <Text style={[styles.heading]}>Waldorf Parents' App </Text>
          <Text style={[styles.moto]}>Always ready to help!</Text>

          <View>
            <View>
              <Text style={[styles.label]}>Email</Text>
              <TextInput
                require
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                placeholderTextColor="rgba(28,53,63, 1)"
                style={[styles.input, isEmailFocused && styles.inputFocus]}
                onChangeText={(value) => handleChangeData("email", value)}
                value={formDetails.email}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
            </View>
            <View>
              <Text style={[styles.label]}>Password</Text>
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocus]}
                onChangeText={(value) => handleChangeData("password", value)}
                value={formDetails.password}
                secureTextEntry
                autoCapitalize="none"
                require
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
              activeOpacity={0.5}
              style={[styles.button, isPressed && styles.buttonPressed]}
            >
              <Text style={[styles.label]}> Login</Text>
            </TouchableOpacity>
            <Pressable onPress={() => handleTestLogin()}>
              <Text style={[styles.label]}>Test-Login</Text>
            </Pressable>
            <Pressable onPress={() => handleFailedLogin()}>
              <Text style={[styles.label]}>Failed-Login</Text>
            </Pressable>
            <Text>{isSignedIn ? "signed in" : "signed out"}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default Login;
