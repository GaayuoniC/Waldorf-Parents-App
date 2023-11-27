import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { styles } from "../styles/FormStyles2";

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
    <View>
      {/* <Text>Post a request for help here!</Text> */}
      <View>
        <Text>Enter name :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          type="text"
          // placeholder="Please enter your full name"
          onChangeText={(text) => handleOfferChange("parentName", text)}
          value={postRequest.parentName}
        />
      </View>
      <View>
        <Text>Enter starting street :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter your street name"
          onChangeText={(text) => handleOfferChange("startStreet", text)}
          value={postRequest.startStreet}
        />
      </View>
      <View>
        <Text>Enter start zip/postcode :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter your postcode"
          onChangeText={(text) => handleOfferChange("startZip", text)}
          value={postRequest.startZip}
        />
      </View>
      <View>
        <Text>Enter start city :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter your start location/city"
          onChangeText={(text) => handleOfferChange("startCity", text)}
          value={postRequest.startCity}
        />
      </View>
      <View>
        <Text>Enter date of transportation :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter date of transportation"
          onChangeText={(text) =>
            handleOfferChange("dateOfTransportation", text)
          }
          value={postRequest.dateOfTransportation}
        />
      </View>
      <View>
        <Text>Mode of transport :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter your mode of transport"
          onChangeText={(text) =>
            handleOfferChange("modeOfTransportation", text)
          }
          value={postRequest.modeOfTransportation}
        />
      </View>
      <View>
        <Text>Direction of travel : </Text>
        <TextInput
          style={[styles.input]}
          // placeholder="Please enter your direction of travel"
          onChangeText={(text) => handleOfferChange("direction", text)}
          value={postRequest.direction}
        />
        <Button title="Submit offer" onPress={handleSubmitOfferRequest} />
      </View>
    </View>
  );
}
// style={[styles.container]}
// style={[styles.form]}
