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

export default function Offers() {
  const { getToken } = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [offers, setOffers] = useState([]);
  // console.log(offers);
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
  }, []);
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
        <View style={styles.loadingContainer}>
          <Text>Loading offers</Text>
          <ActivityIndicator size="large" color="yellow" />
          {/* Come back and refactor color here */}
        </View>
      ) : (
        <View View style={[styles.container]}>
          <Text style={styles.welcome}>Waldorf Parents' App</Text>

          <View style={[styles.offerContainer]}>
            <View style={styles.offerTitle}>
              <Text style={[styles.availabilityText]}>Available offers :</Text>

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
                title="Show/hide"
                onPress={() => setShowPost(!showPost)}
              />
              {showPost && <OfferForm />}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
