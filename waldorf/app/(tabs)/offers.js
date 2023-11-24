import { useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { OfferForm } from "../../components/OfferForm";

export default function Offers() {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Button title="Show/hide" onPress={() => setShowPost(!showPost)} />
        {showPost && <OfferForm />}
        <View>
          <Text>Available offers :</Text>
        </View>
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
    // width: "99%",
    margin: 10,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
});
