import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";

import { OfferForm } from "../../components/OfferForm";
import { styles } from "../../styles/MainStyles";

const url = process.env.EXPO_PUBLIC_API_URL + "/offers";
if (!process.env.EXPO_PUBLIC_API_URL) {
  throw new Error("process.env.EXPO_PUBLIC_API_URL is undefined");
}

export default function Offers() {
  const { getToken } = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [offers, setOffers] = useState([]);
  // console.log(offers);
  const [isLoading, setIsLoading] = useState(false);

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
        // console.debug(data);

        setOffers(data);
      } catch (error) {
        console.log("Your data was not fetched", error);
        Alert.alert("The was a problem loading the data ");
      } finally {
        setIsLoading(false);
      }
    }
    loadOffers();
  }, [showPost]);

  function handleDateDayJs(date) {
    return dayjs(date).format("ddd. DD-MM-YYYY HH:mm   A");
  }

  return (
    //Need to utilise scroll view here!!!
    <ScrollView
      // style={[styles.container]}
      contentContainerStyle={[styles.scrollViewContent]}
    >
      {isLoading ? (
        <View style={[styles.container]}>
          <Text>Loading offers</Text>
          <ActivityIndicator size="large" color="green" />
          {/* Come back and refactor color here */}
        </View>
      ) : (
        <View View style={[styles.container]}>
          <Text style={styles.welcome}>Waldorf Parents' Helper</Text>

          <View style={[styles.offerContainer]}>
            <View style={styles.offerTitle}>
              <Text style={[styles.availabilityText]}>Available offers</Text>

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
                      <Text style={[styles.parentDetail]}>Postal code: </Text>
                      {item.startZip} {"\n"}
                      <Text style={[styles.parentDetail]}>
                        Starting city:{""}{" "}
                      </Text>
                      {item.startCity} {"\n"}
                      <Text style={[styles.parentDetail]}>
                        Date of transport:{" "}
                      </Text>
                      {handleDateDayJs(item.dateOfTransportation)} {"\n"}
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
              <Button
                title="ADD OFFER"
                onPress={() => setShowPost(!showPost)}
              />
              {showPost && (
                <OfferForm
                  onSubmit={() => {
                    setShowPost(false);
                  }}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
