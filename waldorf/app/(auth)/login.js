import { useSignIn, useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { styles } from "../../app/styles";

function Login() {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  const { signIn, setActive, isLoaded } = useSignIn();
  const { useSignedIn } = useUser();

  function handleChangeData(element, value) {
    setFormDetails((prev) => {
      return { ...prev, [element]: value };
    });
  }

  async function handleSubmit() {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignIn = await signIn.create({
        identifier: formDetails.email,
        password: formDetails.password,
      });
      await setActive({ session: completeSignIn.createdSessionId });
      router.replace("/");
    } catch (error) {
      Alert.alert("Error loading page");
    }
  }

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
      </View>
    </View>
  );
}
export default Login;
