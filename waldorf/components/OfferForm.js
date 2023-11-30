import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";

import { styles } from "../styles/FormStyles2";

export function OfferForm({ onSubmit }) {
  const [postOffer, setPostOffer] = useState({
    parentName: "",
    startStreet: "",
    startZip: "",
    startCity: "",
    dateOfTransportation: new Date(),
    modeOfTransportation: "",
    direction: "",
  });
  function handleOfferChange(name, value) {
    // const { name, value } = e.target;
    setPostOffer((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmitOfferForm() {
    const dataToPost = {
      parentName: postOffer.parentName,
      startStreet: postOffer.startStreet,
      startZip: postOffer.startZip,
      startCity: postOffer.startCity,
      dateOfTransportation: dayjs(postOffer.dateOfTransportation).toISOString(),
      modeOfTransportation: postOffer.modeOfTransportation,
      direction: postOffer.direction,
    };
    try {
      const { data } = await axios.post(
        "http://192.168.178.32:3000/offers",
        dataToPost
      );
      console.log(data);

      onSubmit(); //TO DO: hide the form after submission!! used as a prop
    } catch (error) {
      console.log("Could not post your offer", error);
    }
  }

  return (
    <View>
      <View>
        <Text> Name :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handleOfferChange("parentName", text)}
          value={postOffer.parentName}
        />
      </View>
      {/* <DatePicker
        mode="calendar"
        showTimeInput
        dateFormat="dd.YYYY"
        selected={postOffer.dateOfTransportation}
        onDateChange={(date) => {
          setPostOffer((prev) => ({ ...prev, dateOfTransportation: date }));
        }}
      /> */}

      <View>
        <Text>Starting street :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handleOfferChange("startStreet", text)}
          value={postOffer.startStreet}
        />
      </View>
      <View>
        <Text>Start zip/postcode :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handleOfferChange("startZip", text)}
          value={postOffer.startZip}
        />
      </View>
      <View>
        <Text>Start city :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handleOfferChange("startCity", text)}
          value={postOffer.startCity}
        />
      </View>
      {/* <View>
        <Text>Date of transportation :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) =>
            handleOfferChange("dateOfTransportation", text)
          }
          value={postOffer.dateOfTransportation}
        />
      </View> */}
      <View>
        <Text>Mode of transport :</Text>
        <TextInput
          style={[styles.input]}
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
          onChangeText={(text) => handleOfferChange("direction", text)}
          value={postOffer.direction}
        />
        <Button title="Add offer" onPress={handleSubmitOfferForm} />
      </View>
    </View>
  );
}
