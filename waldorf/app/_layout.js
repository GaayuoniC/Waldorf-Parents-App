import { Entypo } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function HomeLayout() {
  return (
    <SafeAreaProvider>
      <View style={styles.safearea}>
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
              tabBarLabel: "Home",
              tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: "bold",
              },
            }}
          />
          <Tabs.Screen
            name="offers"
            options={{
              title: "Offers",
              backgroundColor: "#FF8811",
              fontSize: 10,
              tabBarIcon: ({ color, size }) => (
                <Entypo name="price-tag" size={size} color={color} />
              ),
              tabBarLabel: "Offers",
              tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: "bold",
              },
            }}
          />
          <Tabs.Screen
            name="request"
            options={{
              title: "Requests",
              backgroundColor: "#cf77ce;",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="shopping-bag" size={size} color={color} />
              ),
              tabBarLabel: "Request",
              tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: "bold",
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
    flex: 2,
    backgroundColor: "#cf77ce",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  safearea: {
    flex: 1,
    backgroundColor: "green",
    // width: 400,
    // padding: 20,
    // borderRadius: 12,
  },
});
