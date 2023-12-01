import { useState, useEffect } from "react";
import { Button, Text, View, ScrollView, Alert } from "react-native";
import dayjs from "dayjs";
import axios from "axios";
import { useAuth } from "@clerk/clerk-expo";

import { PostRequestForm } from "../../components/PostRequestForm";
import { styles } from "../../styles/MainStyles";

const url = process.env.EXPO_PUBLIC_API_URL + "/requests";
if (!process.env.EXPO_PUBLIC_API_URL) {
  throw new Error("process.env.EXPO_PUBLIC_API_URL is undefined");
}

export default function Requests() {
  const [showPost, setShowPost] = useState(false);
  const [requests, setRequests] = useState([]);
  const { getToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadRquests() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        });
        // console.debug(data);

        setRequests(data);
      } catch (error) {
        console.log("Your data was not fetched", error);
        Alert.alert("The was a problem loading the data ");
      } finally {
        setIsLoading(false);
      }
    }
    loadRquests();
  }, [showPost]);

  function handleDateDayJs(date) {
    return dayjs(date).format("ddd. DD-MM-YYYY HH:mm   A");
  }

  return (
    <ScrollView contentContainerStyle={[styles.scrollViewContent]}>
      <View style={[styles.container]}>
        <Text style={[styles.welcome]}>Waldorf Parents' Helper</Text>

        <View>
          <View>
            <Text style={[styles.availabilityText]}>Available requests</Text>
          </View>
          <Button title="ADD REQUEST" onPress={() => setShowPost(!showPost)} />
          {showPost && <PostRequestForm />}
        </View>
      </View>
    </ScrollView>
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
