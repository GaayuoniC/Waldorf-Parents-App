import { useState } from "react";
import { Button, Text, View } from "react-native";

import { PostRequestForm } from "../../components/PostRequestForm";
import { styles } from "../../styles/FormStyles2";

export default function Requests() {
  const [showPost, setShowPost] = useState(false);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.welcome]}>Waldorf Parents' Helper</Text>

      <View>
        <View>
          <Text style={[styles.availabilityText]}>Available requests</Text>
        </View>
        <Button title="Post request" onPress={() => setShowPost(!showPost)} />
        {showPost && <PostRequestForm />}
      </View>
    </View>
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
