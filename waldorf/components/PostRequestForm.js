import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { styles } from "../styles/FormStyles2";

export function PostRequestForm({ onSubmit }) {
  const [postRequest, setPostRequest] = useState({
    parentName: "",
    startStreet: "",
    startZip: "",
    startCity: "",
    dateOfTransportation: dayjs()
      .add(1, "day")
      .set("hour", 7)
      .set("minute", 30)
      .set("second", 0)
      .toDate(),
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
        <Text>Date</Text>
        <View
          style={{
            paddingVertical: 10,
            paddingBottom: 16,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <DateTimePicker
            value={postRequest.dateOfTransportation}
            mode="datetime"
            onChange={(event, selectedDate) => {
              handlePostChange("dateOfTransportation", selectedDate);
            }}
          />
        </View>
      </View>
      <View>
        <Text> Name :</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => handlePostChange("parentName", text)}
          value={postRequest.parentName}
        />
      </View>

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
