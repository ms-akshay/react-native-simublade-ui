import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import AppSwitch from "./AppSwitch";

const AppSwitchMeta: Meta<typeof AppSwitch> = {
  title: "AppSwitch",
  component: AppSwitch,
  argTypes: {
    handleValueChange: { action: "Pressed the AppSwitch" },
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

export default AppSwitchMeta;

export const SwitchEnabledDefaultStyle: StoryObj<typeof AppSwitch> = {
  args: {
    isEnabled: true,
  },
};

export const SwitchDisabledDefaultStyle: StoryObj<typeof AppSwitch> = {
  args: {
    isEnabled: false,
  },
};

export const SwitchToggleDisabled: StoryObj<typeof AppSwitch> = {
  args: {
    isDisabled: true,
  },
};

export const SwitchEnabled: StoryObj<typeof AppSwitch> = {
  args: {
    isEnabled: true,
    thumbEnabledColor: "#e85a95",
    trackEnabledColor: "#c9c7c8",
  },
};

export const SwitchDisabled: StoryObj<typeof AppSwitch> = {
  args: {
    isEnabled: false,
    thumbDisabledColor: "#f25055",
    trackDisabledColor: "#ebe6e6",
    iOSBackgroundColor: "#ebe6e6",
  },
};
