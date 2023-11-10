import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Link href="/offers"> Offers</Link>
      <Link href="/requests"> Request</Link>
    </View>
  );
}
