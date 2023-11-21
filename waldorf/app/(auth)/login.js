import { useSignIn, useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles, colors } from "../../app/styles";

function Login() {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  const { signIn, setActive, isLoaded } = useSignIn();
  const { usSignedIn } = useUser();

  function handleChangeData(element, value) {
    setFormDetails((prev) => {
      return { ...prev, [element]: value };
    });
  }

  function handleSubmit() {}

  return (
    <View style={[styles.container]}>
      {/* Take note of the synthax for styles file in native  */}

      <Text style={[styles.heading]}>Please login in </Text>

      <View>
        <View>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(value) => handleChangeData("email", value)}
            value={formDetails.email}
          ></TextInput>
        </View>
        <View>
          <Text style={[styles.label]}>Enter password</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(value) => handleChangeData("password", value)}
            value={formDetails.password}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <Pressable onPress={() => handleSubmit()}>
          <Text style={[styles.label]}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default Login;
