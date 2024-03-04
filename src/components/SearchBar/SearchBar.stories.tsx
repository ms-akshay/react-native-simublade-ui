import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SearchBar from "./SearchBar";

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
    leftIcon: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWrXV7DHI8CTZDOZC-XwJD9TKM3QYfkShq61WV-tMa2tKcgRje9W8MgsplGSob5o4Q4w&usqp=CAU",
    },
    rightIcon: {
      uri: "https://cdn.iconscout.com/icon/free/png-256/free-clear-1781787-1518214.png?f=webp",
    },
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
    leftIcon: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWrXV7DHI8CTZDOZC-XwJD9TKM3QYfkShq61WV-tMa2tKcgRje9W8MgsplGSob5o4Q4w&usqp=CAU",
    },
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
    rightIcon: {
      uri: "https://cdn.iconscout.com/icon/free/png-256/free-clear-1781787-1518214.png?f=webp",
    },
    enabledAutoCorrect: false,
  },
};
