import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Badge from "./Badge";

const BadgeMeta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default BadgeMeta;

export const BadgeExample: StoryObj<typeof Badge> = {
  args: {
    children: "1",
  },
};

export const BadgeExampleTwo: StoryObj<typeof Badge> = {
  args: {
    size: 8,
  },
};

export const BadgeExampleThree: StoryObj<typeof Badge> = {
  args: {
    children: "AJ",
    backgroundColor: "cyan",
    size: 24,
    style: { color: "black", fontWeight: "bold" },
  },
};
