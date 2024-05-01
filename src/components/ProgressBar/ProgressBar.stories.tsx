import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarMeta: Meta<typeof ProgressBar> = {
  title: "Progress Bar",
  component: ProgressBar,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: 8,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default ProgressBarMeta;

export const ProgressBarWith20PercentProgress: StoryObj<typeof ProgressBar> = {
  argTypes: {},
  args: { progressValue: 0.2 },
};

export const ProgressBarWith50PercentProgress: StoryObj<typeof ProgressBar> = {
  argTypes: {},
  args: {
    progressValue: 0.5,
    progressBarBackgroundColor: "#71797E",
    progressBarColor: "#F28C28",
  },
};
