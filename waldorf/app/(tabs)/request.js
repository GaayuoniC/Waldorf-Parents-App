import { useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { PostRequestForm } from "../../components/PostRequestForm";
import { styles } from "../../styles/FormStyles2";

export default function Requests() {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <Text style={[styles.welcome]}>Waldorf Parents' App</Text>

      <View style={[styles.container]}>
        <View>
          <Text>Available requests :</Text>
        </View>
        <Button title="Show/hide" onPress={() => setShowPost(!showPost)} />
        {showPost && <PostRequestForm />}
      </View>
    </>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#d6531f",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     margin: 10,
//   },
//   text: {
//     fontSize: Platform.OS === "ios" ? 20 : 18,
//   },
// });
