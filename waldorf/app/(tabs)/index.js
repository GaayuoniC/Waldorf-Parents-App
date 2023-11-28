import { useAuth } from "@clerk/clerk-expo";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import HomePage from "../../pages/HomePage";

export default function Page() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      {/* <View style={styles.link}> */}
      {/* <Link href="/offers"> Offers</Link>
        <Link href="/requests"> Request</Link> */}
      {/* </View> */}
      <View>
        <HomePage />
        <Pressable onPress={signOut} style={styles.logout}>
          <Text>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    margin: 10,
  },
  logout: {
    alignSelf: "center",
    marginTop: 10,
  },
});
