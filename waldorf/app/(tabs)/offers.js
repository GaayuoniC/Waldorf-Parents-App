import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  ScrollView,
  Text,
  View,
  RefreshControl,
} from "react-native";

import { OfferCardItem } from "../../components/OfferCardItem";
import { OfferForm } from "../../components/OfferForm";
import { styles } from "../../styles/MainStyles";

const apiHost = process.env.EXPO_PUBLIC_API_URL;
if (!apiHost) {
  throw new Error("process.env.EXPO_PUBLIC_API_URL is undefined");
}

export default function Offers() {
  const { getToken } = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [offers, setOffers] = useState([]);
  // console.log(offers);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOffers = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${apiHost}/offers`, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      // console.debug(data);

      setOffers(data);
    } catch (error) {
      console.log("Your data was not fetched", error);
      Alert.alert("There was a problem loading the data ");
    } finally {
      setIsLoading(false);
    }
  }, []);

  //for app http synthax is a must
  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  async function handleSubmitOfferForm(dataToPost) {
    try {
      const { data } = await axios.post(`${apiHost}/offers`, dataToPost, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log("Could not post your offer", error);
    } finally {
      setShowPost(false);
    }
  }

  return (
    //Need to utilise scroll view here!!!
    <ScrollView
      // style={[styles.container]}
      contentContainerStyle={[styles.scrollViewContent]}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={() => {
            console.log("refreshing");
            fetchOffers();
          }}
        />
      }
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
                return <OfferCardItem offers={item} key={item.id} />;
              })}
              <Button
                title={showPost ? "Close offer form" : "Add offer"}
                onPress={() => setShowPost(!showPost)}
              />
              {showPost && <OfferForm onSubmit={handleSubmitOfferForm} />}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
