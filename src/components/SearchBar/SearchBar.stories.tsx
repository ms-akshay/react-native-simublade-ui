import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SearchBar from "./SearchBar";
import { Image } from "../../utils/images";

const SearchBarMeta: Meta<typeof SearchBar> = {
  title: "Search Bar",
  component: SearchBar,
  argTypes: {
    onChangeText: { action: "onChangeText" },
  },
  args: {
    placeholder: "Search here",
    placeholderTextColor: "rgba(0,0,0,0.6)",
    enabledAutoCorrect: true,
  },
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

export default SearchBarMeta;

export const SearchBarNormal: StoryObj<typeof SearchBar> = {
  argTypes: { onSubmitEditing: { action: "onSubmitEditing Button Press" } },
  args: {
    textInputStyle: {
      fontSize: 14,
      lineHeight: 16,
      fontWeight: "500",
    },
  },
};

export const SearchBarWithIcons: StoryObj<typeof SearchBar> = {
  argTypes: {
    onRightIconPress: { action: "onRightIconPress" },
  },
  args: {
    placeholder: "Search...",
    leftIcon: Image.search_icon,
    rightIcon: Image.cross_icon_circular,
    enabledAutoCorrect: true,
    searchContainerStyle: {
      borderRadius: 16,
      borderWidth: 1,
    },
    textInputStyle: {
      fontSize: 16,
      lineHeight: 18,
    },
  },
};

export const SearchBarWithLeftIcon: StoryObj<typeof SearchBar> = {
  args: {
    placeholder: "Veg burgers near me",
    placeholderTextColor: "rgba(0,0,0,0.6)",
    leftIcon: Image.search_icon,
    enabledAutoCorrect: false,
  },
};

export const SearchBarWithRightIcon: StoryObj<typeof SearchBar> = {
  argTypes: {
    onRightIconPress: { action: "onRightIconPress" },
  },
  args: {
    placeholder: "Search classes near you",
    placeholderTextColor: "rgba(0,0,0,0.6)",
    rightIcon: Image.cross_icon_circular,
    enabledAutoCorrect: false,
  },
};
