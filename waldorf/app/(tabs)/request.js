import { Text, View, StyleSheet, Button, Platform } from "react-native";
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
