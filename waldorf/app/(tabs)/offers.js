import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

import { OfferForm } from "../../components/OfferForm";
import { styles } from "../../styles/FormStyles2";

export default function Offers() {
  const [showPost, setShowPost] = useState(false);
  const [offers, setOffers] = useState([]);
  console.log(offers); //Checking
  const [isLoading, setIsLoading] = useState(false);

  const url = "/api/offers";
  useEffect(() => {
    async function loadOffers() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);
        console.debug(data); //data fetching not working!!

        setOffers(data);
      } catch (error) {
        console.log("Your data was not fetched", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadOffers();
  }, []);

  return (
    <>
      <Text style={styles.welcome}>Waldorf Parents' App</Text>

      {isLoading ? (
        <Text>Loading offers</Text>
      ) : (
        <View style={[styles.container]}>
          <View style={styles.offerTitle}>
            <Text>Available offers :</Text>
            <View>
              {offers.map((item) => {
                return <Text key={item.id}>{item.parentName}</Text>;
              })}
            </View>
          </View>
          <Button title="Show/hide" onPress={() => setShowPost(!showPost)} />
          {showPost && <OfferForm />}
        </View>
      )}
    </>
  );
}
// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: Platform.OS === "ios" ? 20 : 18,
//   },
//   offerTitle: {
//     paddingTop: 30,
//     marginBottom: Platform.OS === "ios" ? 0 : 10,
//   },
// });
