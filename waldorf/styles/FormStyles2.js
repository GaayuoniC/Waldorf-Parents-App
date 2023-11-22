import { StyleSheet } from "react-native";

export const colors = {
  mediumBlue: "#98c1d9",
  lightBlue: "#e0fbfc",
  black: "#293241",
  white: "#eeffff",
  highlight: "#ee6c4d",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
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
});
