import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

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
                  <View key={item.id} style={[styles.horizontalLine]}>
                    <Text>
                      <Text style={[styles.parentDetail]}>Parent Name: </Text>
                      {item.parentName} {"\n"}
                      <Text style={[styles.parentDetail]}>
                        Starting street:{" "}
                      </Text>
                      {item.startStreet}
                      {"\n"}
                      <Text style={[styles.parentDetail]}>Postal code:</Text>
                      {item.startZip} {"\n"}
                      <Text style={[styles.parentDetail]}>
                        Starting city:{""}{" "}
                      </Text>
                      {item.startCity} {"\n"}
                      <Text style={[styles.parentDetail]}>
                        Date of transport:{" "}
                      </Text>
                      {item.dateOfTransportation} {"\n"}
                      <Text style={[styles.parentDetail]}>
                        Mode of transportation:{" "}
                      </Text>
                      {item.modeOfTransportation} {"\n"}
                      <Text style={[styles.parentDetail]}>
                        Direction of travel:{" "}
                      </Text>
                      {item.direction} {"\n"}
                    </Text>
                  </View>
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
