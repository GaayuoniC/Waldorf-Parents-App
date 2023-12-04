import { useAuth } from "@clerk/clerk-expo";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { styles } from "../styles/FormStyles2";

const apiHost = process.env.EXPO_PUBLIC_API_URL;

export function PostRequestForm({ onSubmit }) {
  const { getToken } = useAuth();
  const [postRequest, setPostRequest] = useState({
    parentName: "",
    startStreet: "",
    startZip: "",
    startCity: "",
    dateOfTransportation: new Date(),
    modeOfTransportation: "",
    direction: "",
    numberOfChildren: "",
  });

  function handlePostChange(name, value) {
    // const { name, value } = e.target;
    setPostRequest((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmitPostRequest() {
    const dataToPost = {
      parentName: postRequest.parentName,
      startStreet: postRequest.startStreet,
      startZip: postRequest.startZip,
      startCity: postRequest.startCity,
      dateOfTransportation: dayjs(
        postRequest.dateOfTransportation
      ).toISOString(),
      modeOfTransportation: postRequest.modeOfTransportation,
      direction: postRequest.direction,
      numberOfChildren: Number(postRequest.numberOfChildren),
    };
    onSubmit(dataToPost);
  }

  return (
    <View>
      <View>
        <Text> Name :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handlePostChange("parentName", text)}
          value={postRequest.parentName}
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
          onChangeText={(text) => handlePostChange("numberOfChildren", text)}
          value={postRequest.numberOfChildren}
        />
      </View>

      <View>
        <Text>Starting street :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handlePostChange("startStreet", text)}
          value={postRequest.startStreet}
        />
      </View>
      <View>
        <Text>Start zip/postcode :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handlePostChange("startZip", text)}
          value={postRequest.startZip}
        />
      </View>
      <View>
        <Text>Start city :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handlePostChange("startCity", text)}
          value={postRequest.startCity}
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
      {/* <View>
        <Text>Mode of transport :</Text>
        <Picker
          style={[styles.input]}
          onValueChange={(itemValue) =>
            handlePostChange("modeOfTransportation", itemValue)
          }
          selectedValue={postRequest.modeOfTransportation}
        >
          <Picker.Item label="Select travel mode" value="" />
          <Picker.Item label="Walk" value="walk" />
          <Picker.Item label="Bicycle" value="bike" />
          <Picker.Item label="Car" value="car" />
        </Picker>
      </View> */}
      <View>
        <Text>Destination : </Text>
        {/* Picker has no onchange text but a onchange value instedad */}
        <Picker
          style={[styles.input]}
          onValueChange={(itemValue) =>
            handlePostChange("direction", itemValue)
          }
          selectedValue={postRequest.direction}
        >
          <Picker.Item label="Select travel destination" value="" />
          <Picker.Item label="To school" value="to_school" />
          <Picker.Item label="From school" value="from_school" />
          <Picker.Item label="To and from school" value="both" />
        </Picker>
      </View>
      <Button title="Post" onPress={handleSubmitPostRequest} />
    </View>
  );
}
