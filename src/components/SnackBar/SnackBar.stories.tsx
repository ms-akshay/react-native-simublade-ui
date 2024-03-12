import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Snackbar from "./SnackBar";

const SnackBarMeta: Meta<typeof Snackbar> = {
  title: "Snack Bar",
  component: Snackbar,
  argTypes: {
    onActionPress: { action: "onActionPress" },
  },
  args: {
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

export default SnackBarMeta;

export const SnackBarNormal: StoryObj<typeof Snackbar> = {
  argTypes: { onActionPress: { action: "onActionPress" } },
  args: {
    heading: 'Hi There!',
    message: "Do you have a problem? Just use this contact form.",
    actionText: "Dismiss",
    duration: 5000, // Customize duration
    position: "bottom", // Change the position to 'top'/'bottom'
    backgroundColor: "#0070E0", // Customize background color
    IconbackgroundColor:'#05478A',
    textColor: "white",// Change text color
    containerStyle: {
      marginHorizontal: 12,
      borderRadius: 20
    },// Apply additional styling
    messageStyle: {}, // Adjust message text styling
    source: { uri: "https://cdn-icons-png.flaticon.com/128/9796/9796625.png" },
    size: 20,
    color:'white'
  },
};

export const SnackBarError: StoryObj<typeof Snackbar> = {
  argTypes: { onActionPress: { action: "onActionPress" } },
  args: {
    heading: 'Oh Snap!',
    message: "You have failed to read this failure message.Please try again!",
    actionText: "Dismiss",
    duration: 5000, // Customize duration
    position: "bottom", // Change the position to 'top'/'bottom'
    backgroundColor: "#C72C41", // Customize background color
    textColor: "white",// Change text color
    containerStyle: {
      marginHorizontal: 12,
      borderRadius: 20
    },// Apply additional styling
    messageStyle: {}, // Adjust message text styling
    source: { uri: "https://cdn-icons-png.flaticon.com/128/1828/1828665.png" },
    size: 20,
    color:'white'
  },
};

export const SnackBarWarning: StoryObj<typeof Snackbar> = {
  argTypes: { onActionPress: { action: "onActionPress" } },
  args: {
    heading: 'Warning!',
    message: "Sorry! There was a problem with your request.",
    actionText: "Dismiss",
    duration: 5000, // Customize duration
    position: "bottom", // Change the position to 'top'/'bottom'
    backgroundColor: "#EF8D32", // Customize background color
    IconbackgroundColor:"#CC561E",
    textColor: "white",// Change text color
    containerStyle: {
      marginHorizontal: 12,
      borderRadius: 20
    },// Apply additional styling
    messageStyle: {}, // Adjust message text styling
    source: { uri: "https://cdn-icons-png.flaticon.com/128/7420/7420995.png" },
    size: 20,
    color:'white'
  },
};

export const SnackBarSuccess: StoryObj<typeof Snackbar> = {
  argTypes: { onActionPress: { action: "onActionPress" } },
  args: {
    heading: 'Well Done!',
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
    actionText: "Dismiss",
    duration: 5000, // Customize duration
    position: "bottom", // Change the position to 'top'/'bottom'
    backgroundColor: "#0C7040", // Customize background color
    IconbackgroundColor:"#004E32",
    textColor: "white",// Change text color
    containerStyle: {
      marginHorizontal: 12,
      borderRadius: 20
    },// Apply additional styling
    messageStyle: {}, // Adjust message text styling
    source: { uri: "https://cdn-icons-png.flaticon.com/128/9675/9675140.png" },
    size: 20,
    color:'white'
  },
};