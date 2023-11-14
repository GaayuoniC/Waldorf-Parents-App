import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Requests() {
  return (
    <View style={styles.container}>
      <Text>Request for help</Text>
      <Link href="/"> Home</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cf77ce",
    alignItems: "center",
    justifyContent: "center",

    margin: 20,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
});
