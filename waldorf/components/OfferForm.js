import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

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
    numberOfChildren: "",
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
      numberOfChildren: Number(postOffer.numberOfChildren),
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
        dateFormat="d.MM.YYYY HH:mm"
        selected={postOffer.dateOfTransportation}
        onDateChange={(date) => {
          setPostOffer((prev) => ({ ...prev, dateOfTransportation: date }));
        }}
      /> */}
      <View>
        <Text>Number of kids I can care for :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handleOfferChange("numberOfChildren", text)}
          value={postOffer.numberOfChildren}
        />
      </View>

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
        <Picker
          style={[styles.input]}
          onValueChange={(itemValue) =>
            handleOfferChange("modeOfTransportation", itemValue)
          }
          selectedValue={postOffer.modeOfTransportation}
        >
          <Picker.Item label="Select travel mode" value="" />
          <Picker.Item label="Walk" value="walk" />
          <Picker.Item label="Bicycle" value="bike" />
          <Picker.Item label="Car" value="car" />
        </Picker>

        {/* <TextInput
          style={[styles.input]}
          onChangeText={(text) =>
            handleOfferChange("modeOfTransportation", text)
          }
          value={postOffer.modeOfTransportation}
        /> */}
      </View>
      <View>
        <Text>Destination : </Text>
        {/* Picker has no onchange text but a onchange value instedad */}
        <Picker
          style={[styles.input]}
          onValueChange={(itemValue) =>
            handleOfferChange("direction", itemValue)
          }
          selectedValue={postOffer.direction}
        >
          <Picker.Item label="Select travel destination" value="" />
          <Picker.Item label="To school" value="to_school" />
          <Picker.Item label="From school" value="from_school" />
          <Picker.Item label="To and from school" value="both" />
        </Picker>
      </View>
      <Button title="Add offer" onPress={handleSubmitOfferForm} />
    </View>
  );
}
