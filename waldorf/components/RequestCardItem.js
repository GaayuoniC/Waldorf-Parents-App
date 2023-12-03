import dayjs from "dayjs";
import { Text, View } from "react-native";

import { styles } from "../styles/MainStyles";

export function RequestCardItem({ requests }) {
  function handleDateDayJs(date) {
    return dayjs(date).format("ddd. DD-MM-YYYY HH:mm   A");
  }
  return (
    <View key={requests.id} style={[styles.horizontalLine]}>
      <Text>
        <Text style={[styles.parentDetail]}>Parent Name: </Text>
        {requests.parentName} {"\n"}
        <Text style={[styles.parentDetail]}>Starting street: </Text>
        {requests.startStreet}
        {"\n"}
        <Text style={[styles.parentDetail]}>Postal code: </Text>
        {requests.startZip} {"\n"}
        <Text style={[styles.parentDetail]}>Starting city: </Text>
        {requests.startCity} {"\n"}
        <Text style={[styles.parentDetail]}>Date of transport: </Text>
        {handleDateDayJs(requests.dateOfTransportation)} {"\n"}
        <Text style={[styles.parentDetail]}>Mode of transportation: </Text>
        {requests.modeOfTransportation} {"\n"}
        <Text style={[styles.parentDetail]}>Direction of travel: </Text>
        {requests.direction} {"\n"}
      </Text>
    </View>
  );
}
