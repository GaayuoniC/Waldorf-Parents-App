import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";
import { PostRequestForm } from "../components/PostRequestForm";
import { useState } from "react";

export default function Requests() {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <View style={[styles.container]}>
        <Button title="Show/hide" onPress={() => setShowPost(!showPost)} />
        {showPost && <PostRequestForm />}

        <Text>Available requests :</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#d6531f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
});

{
  /* <Text style={styles.welcome}>Waldorf Parents' App</Text> */
}

{
  /* <Text>Request for help</Text> */
}
{
  /* <Link href="/"> Home</Link> */
}
