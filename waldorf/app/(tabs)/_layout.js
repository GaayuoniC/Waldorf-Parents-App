import { useUser } from "@clerk/clerk-expo";
import { Entypo } from "@expo/vector-icons";
import { Tabs, Redirect } from "expo-router";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeLayout() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <View>
        <Text>Loading Page</Text>
      </View>
    );
  }
  if (!isSignedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <View>
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
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // backgroundColor: "#cf77ce",
    backgroundColor: "#f7f7ff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
    //
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  safearea: {
    flex: 1,
    // backgroundColor: "green",
    // width: 400,
    // padding: 20,
    // borderRadius: 12,
  },
});
