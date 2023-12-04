import dayjs from "dayjs";
import { Text, View, Pressable } from "react-native";

import { styles, colors } from "../styles/MainStyles";

const directions = {
  from_school: "From school",
  to_school: "To school",
  both: "To and from school",
};

export function RequestCardItem({ requests: request }) {
  return (
    <View
      key={request.id}
      style={[
        styles.horizontalLine,
        { gap: 4 },
        request.acceptedByUserId && {
          borderBottomColor: colors.baseOrange,
          borderBottomWidth: 2,
        },
      ]}
    >
      <Text style={[{ fontSize: 24, fontWeight: "500" }]}>
        {request.parentName}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={[{ fontSize: 18 }]}>
          {dayjs(request.dateOfTransportation).format("dddd DD.MM.YYYY")}
        </Text>
        <Text style={[{ fontSize: 18 }]}>
          {dayjs(request.dateOfTransportation).format("HH:mm")}
        </Text>
      </View>
      <Text>{directions[request.direction]}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ gap: 2 }}>
          <Text style={{ fontSize: 10, fontWeight: "200", marginTop: 4 }}>
            Pickup Address
          </Text>
          <Text>{request.startStreet}</Text>
          <Text>
            {request.startZip} {request.startCity}
          </Text>
        </View>
        {!request.acceptedByUserId && (
          <Pressable style={[styles.button, { alignSelf: "flex-end" }]}>
            <Text>Accept</Text>
          </Pressable>
        )}
      </View>
      {request.acceptedByUserId && (
        <>
          <Text style={{ fontSize: 10, fontWeight: "200", marginTop: 4 }}>
            Accepted By
          </Text>
          <Text>{request.acceptedByName}</Text>
          <Text>{request.acceptedByEmail}</Text>
          <Text>{request.acceptedMessage}</Text>
        </>
      )}

      {/* <Text>
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
      </Text> */}
    </View>
  );
}
