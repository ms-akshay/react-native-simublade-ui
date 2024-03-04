import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.8,
    borderRadius: 12,
  },

  inputStyle: {
    flex: 1,
    width: "100%",
    height: 56,
    padding: 16,
  },

  iconStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
