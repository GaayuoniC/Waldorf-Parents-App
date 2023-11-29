import { StyleSheet, Platform } from "react-native";
export const colors = {
  baseOrange: "#d6531f",
  headerColor: "#367714",
  black: "#293241",
  white: "#eeffff",
  lightBlue: "#e0fbfc",
  lightPink: "#f2bca6",
  burntSienna: "#E48863",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.white,
  },
  safeArea: {
    backgroundColor: colors.baseOrange,
    // flex: 2,
  },
  heading: {
    color: colors.headerColor,
    fontSize: 40,
    marginBottom: 20,
  },
  moto: {
    fontSize: 30,
    fontWeight: 300,
  },
  label: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 300,
    alignSelf: "flex-start",
    padding: 0,
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    color: colors.black,
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  input: {
    color: colors.black,
    width: 270,
    margin: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.burntSienna,
    paddingHorizontal: 14,
    paddingVertical: 15,
    fontSize: 20,
  },
  inputFocus: {
    backgroundColor: colors.lightBlue,
  },
  form: {
    width: "100%",
    gap: 4,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderColor: colors.burntSienna,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonPressed: {
    backgroundColor: colors.burntSienna,
  },
  logo: {
    width: 100,
    height: 150,
  },
});
