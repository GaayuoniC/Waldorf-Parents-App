import { colors, styles } from "../styles/FormStyles2";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export function PostRequestForm() {
  const [postRequest, setPostRequest] = useState({
    title: "",
    description: "",
  });
  function handlePostChange(name, value) {
    // const { name, value } = e.target;
    setPostRequest((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitPostRequest(e) {
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
          placeholder="Enter title of request"
          onChangeText={(text) => handlePostChange("title", text)}
          value={postRequest.title}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Description of request needed: </Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter description of help requested"
          onChangeText={(text) => handlePostChange("description", text)}
          value={postRequest.description}
        />
        <Button title="Post" onPress={handleSubmitPostRequest} />
      </View>
      <View>
        <Text>Available requests for help:</Text>
      </View>
    </View>
  );
}
