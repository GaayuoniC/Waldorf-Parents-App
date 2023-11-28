import { Text, View, Image } from "react-native";

import { styles } from "../styles/FormStyles2";

export function UserProfile({ user }) {
  return (
    <View>
      <Image source={{}} style={[styles.profileImage]} />
      <Text>{user.name}</Text>
    </View>
  );
}
