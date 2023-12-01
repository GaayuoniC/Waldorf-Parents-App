import dayjs from "dayjs";
import { Text, View } from "react-native";

import { styles } from "../styles/MainStyles";

export function OfferCardItem({ offers }) {
  function handleDateDayJs(date) {
    return dayjs(date).format("ddd. DD-MM-YYYY HH:mm   A");
  }
  return (
    <View key={offers.id} style={[styles.horizontalLine]}>
      <Text>
        <Text style={[styles.parentDetail]}>Parent Name: </Text>
        {offers.parentName} {"\n"}
        <Text style={[styles.parentDetail]}>Starting street: </Text>
        {offers.startStreet}
        {"\n"}
        <Text style={[styles.parentDetail]}>Postal code: </Text>
        {offers.startZip} {"\n"}
        <Text style={[styles.parentDetail]}>Starting city:{""} </Text>
        {offers.startCity} {"\n"}
        <Text style={[styles.parentDetail]}>Date of transport: </Text>
        {handleDateDayJs(offers.dateOfTransportation)} {"\n"}
        <Text style={[styles.parentDetail]}>Mode of transportation: </Text>
        {offers.modeOfTransportation} {"\n"}
        <Text style={[styles.parentDetail]}>Direction of travel: </Text>
        {offers.direction} {"\n"}
      </Text>
    </View>
  );
}
