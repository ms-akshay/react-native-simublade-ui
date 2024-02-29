import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
import Config from "react-native-config";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Text style={styles.title}>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});

// Whether the storybook is enabled or not in env
let AppEntryPoint = App;

if (Config.STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
