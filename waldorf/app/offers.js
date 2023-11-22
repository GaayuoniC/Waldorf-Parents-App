import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { OfferForm } from "../components/OfferForm";

export default function Offers() {
  return (
    <View style={styles.container}>
      <Text name="Offers"> Offers </Text>
      <Link href="/"> Home</Link>
      <OfferForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#d6531f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    // width: "99%",
    margin: 10,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
});
