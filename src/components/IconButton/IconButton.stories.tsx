import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import React from "react";

const IconButtonMeta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default IconButtonMeta;

export const Basic: StoryObj<typeof IconButton> = {};

export const AnotherExample: StoryObj<typeof IconButton> = {
  args: {
    text: "Another example",
  },
};
