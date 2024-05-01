import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: 'red'
  },
  topContainer: {
    top: 15,
  },
  bottomContainer: {
    bottom: 15,
    marginHorizontal: 20
  },
  headingText: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom:5

  },
  messageText: {
    fontSize: 14,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
  },
  textContainer: {
    width: '80%',
    paddingHorizontal: 10,
  },
  crossIconContainer: {
    alignSelf: 'flex-start'
  },
  msgTypeImageContainer: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: '#9D2333',
    alignItems: 'center',
    justifyContent: 'center'
  }
});