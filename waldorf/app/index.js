import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import HomePage from "../pages/HomePage";

export default function Page() {
  return (
    <View>
      <Link href="/offers"> Offers</Link>
      <Link href="/requests"> Request</Link>
      {/* <HomePage /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cf77ce",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
});
