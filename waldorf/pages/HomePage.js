import { Button, Platform, StyleSheet, Text, View } from "react-native";
export default function HomePage() {
  return (
    <>
      <Text style={styles.welcome}>Waldorf Parents' App</Text>
      <Text style={styles.text}>
        Welcome to the Waldorf school parents helper App. The site is made with
        the main intention of making life a little bit easier for parents. As a
        parent or guardian, you can place an offer to help other parents kids
        get to school safely and timely. You can also ask for help in out post
        requests section.
      </Text>
      <Text style={styles.text}>
        Once you register as a parent, you can have easy access to all our
        services;asking for help and offering to help other parents who might
        need help with their kids.
      </Text>
      <Text style={styles.text}>
        Feel free to give us any feedback that you think might be of help to us
        and other parents
      </Text>

      <View>
        <Button title="Login" style={styles.loginButton} />
        <Text>Not registered? Please register, here!</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginBottom: 10,
    padding: 40,
    borderRadius: 20,
    width: Platform.OS === "ios" ? 420 : 380,

    //Come back and refactor this style
  },
  text: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
    lineHeight: Platform.OS === "ios" ? 30 : 26,
  },
  welcome: {
    fontSize: Platform.OS === "ios" ? 30 : 28,
    fontStyle: "italic",
    marginBottom: 20,
    color: "green",
  },
  loginButton: {
    color: "#cf77ce",
  },
});
