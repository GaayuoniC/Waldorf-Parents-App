import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", backgroundColor: "#FF8811" }}
      />
      <Tabs.Screen
        name="offers"
        options={{ title: "Offers", backgroundColor: "#FF8811" }}
      />
      <Tabs.Screen
        name="request"
        options={{ title: "Requests", backgroundColor: "#cf77ce;" }}
      />
    </Tabs>
  );
}
