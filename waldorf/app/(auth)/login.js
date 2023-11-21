import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export function Login() {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  function handleChangeData(element, value) {
    setFormDetails((prev) => {
      return { ...prev, [element]: value };
    });
  }

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
      </View>
    </View>
  );
}
