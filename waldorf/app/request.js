import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Requests() {
  return (
    <View>
      <Text>Request for help</Text>
      <Link href="/"> Home</Link>
    </View>
  );
}
