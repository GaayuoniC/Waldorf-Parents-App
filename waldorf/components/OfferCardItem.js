import dayjs from "dayjs";
import { Text, View } from "react-native";

import { styles } from "../styles/MainStyles";

const directions = {
  from_school: "From school",
  to_school: "To school",
  both: "To and from school",
};
export function OfferCardItem({ offers }) {
  return (
    <View key={offers.id} style={[styles.horizontalLine, { gap: 4 }]}>
      <Text style={[{ fontSize: 24, fontWeight: "500" }]}>
        {offers.parentName}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={[{ fontSize: 18 }]}>
          {dayjs(offers.dateOfTransportation).format("dddd. DD-MM-YYYY")}
        </Text>
        <Text style={[{ fontSize: 18 }]}>
          {dayjs(offers.dateOfTransportation).format("HH:mm")}
        </Text>
      </View>

      <Text>No. of kids {offers.numberOfChildren}</Text>

      <Text>{directions[offers.direction]}</Text>
      <View style={{ gap: 2 }}>
        <Text style={{ fontSize: 10, fontWeight: "250", marginTop: 4 }}>
          Pickup Address
        </Text>
        <Text>{offers.startStreet}</Text>
        <Text>
          {offers.startZip} {offers.startCity}
        </Text>
      </View>
    </View>
  );
}
