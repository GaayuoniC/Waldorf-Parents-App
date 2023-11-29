import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import dayjs from "dayjs";

import { styles } from "../styles/FormStyles2";

export function OfferForm() {
  const [postOffer, setPostOffer] = useState({
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
    setPostOffer((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitOfferForm(e) {
    e.preventDefault();
    const dataToPost = {
      parentName: postOffer.parentName,
      startStreet: postOffer.startStreet,
      startZip: postOffer.startZip,
      startCity: postOffer.startCity,
      dateOfTransportation: dayjs(postOffer.dateOfTransportation).toISOString(),
      modeOfTransportation: postOffer.modeOfTransportation,
      direction: postOffer.direction,
    };
  }

  return (
    <View>
      {/* <Text>Post a request for help here!</Text> */}
      <View>
        <Text> Name :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          type="text"
          // placeholder="Please enter your full name"
          onChangeText={(text) => handleOfferChange("parentName", text)}
          value={postOffer.parentName}
        />
      </View>
      <View>
        <Text>Starting street :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter your street name"
          onChangeText={(text) => handleOfferChange("startStreet", text)}
          value={postOffer.startStreet}
        />
      </View>
      <View>
        <Text>Start zip/postcode :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter your postcode"
          onChangeText={(text) => handleOfferChange("startZip", text)}
          value={postOffer.startZip}
        />
      </View>
      <View>
        <Text>Start city :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter your start location/city"
          onChangeText={(text) => handleOfferChange("startCity", text)}
          value={postOffer.startCity}
        />
      </View>
      <View>
        <Text>Date of transportation :</Text>
        <TextInput
          // style={}
          style={[styles.input]}
          // placeholder="Please enter date of transportation"
          onChangeText={(text) =>
            handleOfferChange("dateOfTransportation", text)
          }
          value={postOffer.dateOfTransportation}
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
          value={postOffer.modeOfTransportation}
        />
      </View>
      <View>
        <Text>Destination : </Text>
        <TextInput
          style={[styles.input]}
          // placeholder="Please enter your direction of travel"
          onChangeText={(text) => handleOfferChange("direction", text)}
          value={postOffer.direction}
        />
        <Button title="Submit offer" onPress={handleSubmitOfferForm} />
      </View>
    </View>
  );
}
