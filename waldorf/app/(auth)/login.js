import { useSignIn, useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

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
    <View>
      <Text>Login</Text>

      <View>
        <View>
          <Text>Email</Text>
          <TextInput
            onChangeText={(value) => handleChangeData("email", value)}
            value={formDetails.email}
          ></TextInput>
        </View>
        <View>
          <Text>Enter password</Text>
          <TextInput
            onChangeText={(value) => handleChangeData("password", value)}
            value={formDetails.password}
          ></TextInput>
        </View>
        <Pressable onPress={() => handleSubmit()}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default Login;
