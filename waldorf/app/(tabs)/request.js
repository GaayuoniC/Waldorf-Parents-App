import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import { PostRequestForm } from "../../components/PostRequestForm";
import { RequestCardItem } from "../../components/RequestCardItem";
import { styles } from "../../styles/MainStyles";

const apiHost = process.env.EXPO_PUBLIC_API_URL;
if (!apiHost) {
  throw new Error("process.env.EXPO_PUBLIC_API_URL is undefined");
}

export default function Requests() {
  const [showPost, setShowPost] = useState(false);
  const [requests, setRequests] = useState([]);
  const { getToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadRequests() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${apiHost}/requests`, {
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
    loadRequests();
  }, [showPost]);

  async function handleSubmitPostRequest(dataToPost) {
    try {
      const { data } = await axios.post(`${apiHost}/requests`, dataToPost, {
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
    <ScrollView contentContainerStyle={[styles.scrollViewContent]}>
      {isLoading ? (
        <View style={[styles.container]}>
          <Text>Loading offers</Text>
          <ActivityIndicator size="large" color="green" />
          {/* Come back and refactor color here */}
        </View>
      ) : (
        <View style={[styles.container]}>
          <Text style={[styles.welcome]}>Waldorf Parents' Helper</Text>

          <View>
            <View>
              <Text style={[styles.availabilityText]}>Available requests</Text>
            </View>
            {requests.map((item) => {
              return <RequestCardItem requests={item} key={item.id} />;
            })}

            <Button
              title={showPost ? "Close form" : "Add request"}
              onPress={() => setShowPost(!showPost)}
            />
            {showPost && <PostRequestForm onSubmit={handleSubmitPostRequest} />}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
