import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import HomePage from "../../pages/HomePage";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.link}> */}
      {/* <Link href="/offers"> Offers</Link>
        <Link href="/requests"> Request</Link> */}
      {/* </View> */}
      <View>
        <HomePage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#d6531f", //Not a suitable place!!
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  link: {
    flexDirection: "row",
    gap: 50,
    // backgroundColor: "yellow",
    margin: 10,
  },
});
