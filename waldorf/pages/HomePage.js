import { Text, View, Button } from "react-native";
export function HomePage() {
  return (
    <>
      <View>
        <Text>
          Welcome to the Waldorf school parents helper site. The site is made
          with the main intention of making life a little bit easier for
          parents. As a parent or guardian, you can place an offer to help other
          parents kids get to school safely and timely. You can also ask for
          help in out post requests section.
        </Text>
        <Text>
          Once you register as a parent, you can have easy access to all our
          services;asking for help and offering to help other parents who might
          need help with their kids.
        </Text>
        <Text>
          Feel free to give us any feedback that you think might be of help to
          us and other parents
        </Text>

        <View>
          <Button>Login</Button>
          <Text>Not registered? Please register here!</Text>
        </View>
      </View>
    </>
  );
}
