import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { styles, colors } from "../styles/FormStyles2";

export function OfferForm() {
  const [postRequest, setPostRequest] = useState({
    title: "",
    description: "",
  });
  function handleOfferChange(name, value) {
    // const { name, value } = e.target;
    setPostRequest((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitOfferRequest(e) {
    e.preventDefault();
  }

  return (
    <View style={[styles.container]}>
      {/* <Text>Post a request for help here!</Text> */}
      <View style={[styles.form]}>
        <Text>Title of request</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          placeholder="Enter title of offer"
          onChangeText={(text) => handleOfferChange("title", text)}
          value={postRequest.title}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Description of offer to help: </Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter description of help to offer"
          onChangeText={(text) => handleOfferChange("description", text)}
          value={postRequest.description}
        />
        <Button title="Submit offer" onPress={handleSubmitOfferRequest} />
      </View>
    </View>
  );
}
