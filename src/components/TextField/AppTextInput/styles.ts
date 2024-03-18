import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },

  flatMainContainer: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: 60,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  outlinedMainContainerContainer: {
    justifyContent: "center",
    paddingVertical: 20,
    width: "100%",
  },

  outLinedMainContainer: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: 60,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 4,
  },

  textInputStyles: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
