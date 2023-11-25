import { useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { OfferForm } from "../../components/OfferForm";

export default function Offers() {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.offerTitle}>
          <Text>Available offers :</Text>
        </View>
        <Button title="Show/hide" onPress={() => setShowPost(!showPost)} />
        {showPost && <OfferForm />}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  offerTitle: {
    paddingTop: 30,
    marginBottom: Platform.OS === "ios" ? 0 : 10,
  },
});
