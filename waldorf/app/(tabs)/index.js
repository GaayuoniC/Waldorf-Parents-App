import { useAuth } from "@clerk/clerk-expo";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { UserProfile } from "../../components/UserProfile";
import HomePage from "../../pages/HomePage";

export default function Page() {
  const [user, setUser] = useState({ name: "Chris G", profilePicture: "" });

  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      {/* <View style={styles.link}> */}
      {/* <Link href="/offers"> Offers</Link>
        <Link href="/requests"> Request</Link> */}
      {/* </View> */}
      <View>
        <UserProfile user={user} />
      </View>

      <View>
        <HomePage />
        <Pressable onPress={signOut}>
          <Text>Logout</Text>
        </Pressable>
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
