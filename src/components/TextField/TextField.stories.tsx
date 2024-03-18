import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TextField from "./TextField";
import { TextFieldEnum } from "../../utils/enumUtil";

const TextFieldMeta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
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

export default TextFieldMeta;

export const TextFieldFlatType: StoryObj<typeof TextField> = {
  args: {
    placeholder: "Type Something",
    label: "First Name",
    type: "outlined",
  },
  argTypes: {
    onChangeText: { action: "onChangeText" },
  },
};

export const TextFieldPasswordFlatType: StoryObj<typeof TextField> = {
  args: {
    placeholder: "Enter Password",
    label: "Password",
    type: "flat",
    fieldType: TextFieldEnum.PASSWORD_TYPE,
  },
  argTypes: {
    onChangeText: { action: "onChangeText" },
  },
};

export const TextFieldDescriptionOutlinedType: StoryObj<typeof TextField> = {
  args: {
    label: "Description",
    type: "outlined",
    fieldType: TextFieldEnum.DESCRIPTION_TYPE,
    value: "This is the description",
  },
  argTypes: {
    onChangeText: { action: "onChangeText" },
  },
};

export const TextFieldNumberOutlinedType: StoryObj<typeof TextField> = {
  args: {
    label: "Enter number here",
    type: "outlined",
    fieldType: TextFieldEnum.NUMBER_TYPE,
  },
  argTypes: {
    onChangeText: { action: "onChangeText" },
  },
};
