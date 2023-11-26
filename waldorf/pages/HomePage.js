import { useUser } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";

import { styles } from "../styles/FormStyles2";

export default function HomePage() {
  const { isSignedIn } = useUser();

  return (
    <>
      <Text style={[styles.welcome]}>Waldorf Parents' App</Text>
      <View style={[styles.container]}>
        <Text style={styles.text}>
          Welcome to the Waldorf school parents helper App. The site is made
          with the main intention of making life a little bit easier for
          parents. As a parent or guardian, you can place an offer to help other
          parents kids get to school safely and timely. You can also ask for
          help in out post requests section.
        </Text>
        <Text style={styles.text}>
          Once you register as a parent, you can have easy access to all our
          services;asking for help and offering to help other parents who might
          need help with their kids.
        </Text>
        <Text style={styles.text}>
          Feel free to give us any feedback that you think might be of help to
          us and other parents
        </Text>

        {!isSignedIn ? (
          <View>
            <Button title="Login" style={styles.loginButton} />
            <Text>Not registered? Please register, here!</Text>
          </View>
        ) : null}
      </View>
    </>
  );
}
