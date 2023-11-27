import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

import { OfferForm } from "../../components/OfferForm";
import { styles } from "../../styles/FormStyles2";

export default function Offers() {
  const { getToken } = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [offers, setOffers] = useState([]);
  console.log(offers); //Checking
  const [isLoading, setIsLoading] = useState(false);

  const url = "http://192.168.178.32:3000/offers";
  //for app http synthax is a must
  useEffect(() => {
    async function loadOffers() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        });
        console.debug(data);

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
                return (
                  <Text key={item.id}>
                    Parent Name: {item.parentName} Starting street:
                    {item.startStreet}
                    Postal code: {item.startZip}
                    Starting city: {item.startCity}
                    Date of transport{item.dateOfTransportion}
                    Mode of transportation{item.modeOfTransportation}
                    Direction of travel{item.direction}
                  </Text>
                );
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
