import { useSignIn, useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { styles } from "../../app/styles";

function Login() {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  const { signIn, setActive, isLoaded } = useSignIn();
  const { isSignedIn } = useUser();

  function handleChangeData(element, value) {
    setFormDetails((prev) => {
      return { ...prev, [element]: value };
    });
  }

  async function login(email, password) {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });
      await setActive({ session: completeSignIn.createdSessionId });
      router.replace("/");
    } catch (error) {
      console.log(error);
      Alert.alert("Login failed");
    }
  }

  async function handleSubmit() {
    await login(formDetails.email, formDetails.password);
  }

  const handleTestLogin = async () => {
    await login("", "");
  };

  const handleFailedLogin = async () => {
    await login("a@b.com", "sdfsdf");
  };

  return (
    <View style={[styles.container]}>
      {/* Take note of the synthax for styles file in native  */}

      <Text style={[styles.heading]}>Please login in </Text>

      <View>
        <View>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            placeholderTextColor="rgba(28,53,63, 1)"
            style={[styles.input]}
            onChangeText={(value) => handleChangeData("email", value)}
            value={formDetails.email}
          />
        </View>
        <View>
          <Text style={[styles.label]}>Enter password</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(value) => handleChangeData("password", value)}
            value={formDetails.password}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <Pressable onPress={() => handleSubmit()}>
          <Text style={[styles.label]}>Login</Text>
        </Pressable>
        <Pressable onPress={() => handleTestLogin()}>
          <Text style={[styles.label]}>Test-Login</Text>
        </Pressable>
        <Pressable onPress={() => handleFailedLogin()}>
          <Text style={[styles.label]}>Failed-Login</Text>
        </Pressable>
        <Text>{isSignedIn ? "signed in" : "signed out"}</Text>
      </View>
    </View>
  );
}
export default Login;
