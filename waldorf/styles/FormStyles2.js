import { StyleSheet, Platform } from "react-native";

export const colors = {
  mediumBlue: "#98c1d9",
  lightBlue: "#e0fbfc",
  black: "#293241",
  white: "#eeffff",
  highlight: "#ee6c4d",
};
// export const newInputStyle = {
//   ...input,
//   height: 50,
// }; //using the spread operator to add specific height...did not function!!

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#f7f7ff",
    alignItems: "center",
    justifyContent: "center",
    width: Platform.OS === "ios" ? 380 : 360,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 12,
      },
      android: { elevation: 4 },
    }),
  },
  // Used the spread operator to be able to style for ios and android seperately
  //found the solution online!!!
  textPrimary: {
    color: colors.white,
    fontSize: 16,
  },
  heading: {
    color: colors.white,
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderColor: colors.mediumBlue,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  label: {
    color: colors.black,
    fontSize: 12,
    fontWeight: 300,
    alignSelf: "flex-start",
    padding: 0,
  },
  input: {
    color: colors.black,
    width: "100%",
    margin: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.black,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    minWidth: 300,
  },

  form: {
    width: "100%",
    gap: 4,
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
