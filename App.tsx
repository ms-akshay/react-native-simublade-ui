import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import Config from "react-native-config";
import ProgressBar from "./src/components/ProgressBar/ProgressBar";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setProgress((prev) => {
        return prev + 1;
      });
    }, 2000);

    () => {
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Text style={styles.title}>Hello</Text>
      <View style={{ width: "100%", padding: 12 }}>
        <ProgressBar progressValue={progress} />
      </View>
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
