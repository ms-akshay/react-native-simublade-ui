import { Alert, View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import React from "react";

const IconButtonMeta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  argTypes: {
    onPress: { action: "Pressed the button" },
  },
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default IconButtonMeta;

export const Link: StoryObj<typeof IconButton> = {
  args: {
    source: { uri: "https://cdn-icons-png.flaticon.com/512/7046/7046086.png" },
    size: 30,
    onPress: () => {
      Alert.alert("I am link");
    },
    containerStyle: { borderWidth: 1 },
  },
};

export const LinkWithBackground: StoryObj<typeof IconButton> = {
  args: {
    source: { uri: "https://cdn-icons-png.flaticon.com/512/7046/7046086.png" },
    size: 30,
    onPress: () => {
      Alert.alert("I am link with background");
    },
    containerStyle: { backgroundColor: "#DDD" },
  },
};

export const DisabledLink: StoryObj<typeof IconButton> = {
  args: {
    source: { uri: "https://cdn-icons-png.flaticon.com/512/7046/7046086.png" },
    size: 30,
    disabled: true,
    containerStyle: { borderWidth: 1, backgroundColor: "#DDD" },
  },
};
