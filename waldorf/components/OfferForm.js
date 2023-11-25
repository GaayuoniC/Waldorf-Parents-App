import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { styles, colors } from "../styles/FormStyles2";

export function OfferForm() {
  const [postRequest, setPostRequest] = useState({
    parentName: "",
    startStreet: "",
    startZip: "",
    startCity: "",
    dateOfTransportation: "",
    modeOfTransportation: "",
    direction: "",
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
        <Text>Enter name</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          placeholder="Please enter your full name"
          onChangeText={(text) => handleOfferChange("title", text)}
          value={postRequest.parentName}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Enter starting street</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          placeholder="Please enter your street name"
          onChangeText={(text) => handleOfferChange("title", text)}
          value={postRequest.startStreet}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Enter start zip/postcode</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          placeholder="Please enter your postcode"
          onChangeText={(text) => handleOfferChange("title", text)}
          value={postRequest.startZip}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Enter start city</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          placeholder="Please enter your start location/city"
          onChangeText={(text) => handleOfferChange("title", text)}
          value={postRequest.startCity}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Enter date of transportation</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          placeholder="Please enter date of transportation"
          onChangeText={(text) => handleOfferChange("title", text)}
          value={postRequest.dateOfTransportation}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Mode of transport</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          placeholder="Please enter your mode of transport"
          onChangeText={(text) => handleOfferChange("title", text)}
          value={postRequest.modeOfTransportation}
        />
      </View>
      <View style={[styles.form]}>
        <Text>Direction of travel: </Text>
        <TextInput
          style={[styles.input]}
          placeholder="Please enter your direction of travel"
          onChangeText={(text) => handleOfferChange("description", text)}
          value={postRequest.direction}
        />
        <Button title="Submit offer" onPress={handleSubmitOfferRequest} />
      </View>
    </View>
  );
}
