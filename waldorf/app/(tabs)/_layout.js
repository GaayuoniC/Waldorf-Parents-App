import { useUser } from "@clerk/clerk-expo";
import { Entypo } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function HomeLayout() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <View>
        <Text>Loading Page</Text>
        <ActivityIndicator size="large" color="yellow" />
      </View>
    );
  }
  if (!isSignedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#cf77ce",
        tabBarInactiveTintColor: "blue",
        tabBarStyle: { backgroundColor: "#d6531f", padding: 10 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#d6531f" },
          headerTintColor: "white",

          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
          tabBarActiveTintColor: "white",

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: "Offers",
          headerStyle: { backgroundColor: "#d6531f" },
          headerTintColor: "white",

          tabBarIcon: ({ color, size }) => (
            <Entypo name="price-tag" size={size} color={color} />
          ),
          tabBarLabel: "Offers",
          tabBarActiveTintColor: "white",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: "Request",
          headerStyle: { backgroundColor: "#d6531f" },
          headerTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-bag" size={size} color={color} />
          ),
          tabBarLabel: "Request",
          tabBarActiveTintColor: "white",

          tabBarLabelStyle: {
            fontSize: 12,

            fontWeight: "bold",
            color: "black",
          },
        }}
      />
    </Tabs>
  );
}
