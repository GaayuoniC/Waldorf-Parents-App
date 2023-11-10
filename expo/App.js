import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { MyTabs } from "./assets/components/MyTabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text style={styles.headerText}>Waldorf Parents App</Text>
          <Text>Welcome !!</Text>
        </View>
        <MyTabs />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff85ba",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
  },
});
