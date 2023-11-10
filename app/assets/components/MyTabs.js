import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../pages/HomePage";
import { Offers } from "../pages/Offers";
import { Requests } from "../pages/Request";

export function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="Request" component={Requests} />
    </Tab.Navigator>
  );
}
