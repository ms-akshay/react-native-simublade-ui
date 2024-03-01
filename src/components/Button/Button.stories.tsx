import { Alert, View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

const ButtonMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "Pressed the button" },
  },
  args: {
    title: "Hello world",
    onPress: () => {
      Alert.alert("I am clicked");
    },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const ExampleOne: StoryObj<typeof Button> = {};

export const ExampleTwo: StoryObj<typeof Button> = {
  args: {
    title: "Another example",
    containerStyle: { borderRadius: 0, backgroundColor: "blue" },
    onPress: () => {
      Alert.alert("I am clicked");
    },
  },
};
