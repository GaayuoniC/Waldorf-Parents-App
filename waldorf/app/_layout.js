import { Entypo } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#cf77ce",
          tabBarInactiveTintColor: "blue",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            backgroundColor: "#FF8811",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="offers"
          options={{
            title: "Offers",
            backgroundColor: "#FF8811",
            fontSize: 10,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="request"
          options={{
            title: "Requests",
            backgroundColor: "#cf77ce;",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 2,
    backgroundColor: "#cf77ce",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
});
