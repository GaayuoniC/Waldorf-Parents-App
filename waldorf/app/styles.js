import { StyleSheet } from "react-native";
export const colors = {
  baseOrange: "#d6531f",
  headerColor: "#367714",
  black: "#293241",
  white: "#eeffff",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    // backgroundColor: colors.baseOrange,
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
  label: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 300,
    alignSelf: "flex-start",
    padding: 0,
  },
  text: {
    color: colors.black,
    fontSize: Platform.OS === "ios" ? 20 : 18,
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
  },
  form: {
    width: "100%",
    gap: 4,
  },
});
