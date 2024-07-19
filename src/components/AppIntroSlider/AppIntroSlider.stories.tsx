import { Alert, View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import AppIntroSlider from "./AppIntroSlider";

const AppIntroSliderMeta: Meta<typeof AppIntroSlider> = {
    title: "AppIntroSlider",
    component: AppIntroSlider,
    argTypes: {
        // handleValueChange: { action: "Pressed the AppIntroSlider" },
        onLastSlideButtonPress: { action: "Pressed the AppIntroSlider" },
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

export default AppIntroSliderMeta;

export const AppIntroSliderTitleOnTop: StoryObj<typeof AppIntroSlider> = {
    args: {
        sliderData: [
            {
                id: 1,
                image: { uri: 'https://i.pinimg.com/564x/c2/8e/f7/c28ef73bb6e30baec40e2c14fb5180dc.jpg' },
                title: "Welcome",
                description: "We’re glad that that you are here, We’re glad that that you are here"
            },
            {
                id: 2,
                image: { uri: 'https://i.pinimg.com/564x/de/31/eb/de31eb72c52f09fd76568e07dd16bc3e.jpg' },
                title: "Best deal on the market",
                description: "... let's find your next art"
            },
            {
                id: 3,
                image: { uri: 'https://i.pinimg.com/564x/e1/79/6c/e1796cd9652099751dac2ee632dd3d1d.jpg' },
                title: "It's all about art",
                description: "... seriously, it is"
            },
            {
                id: 4,
                image: { uri: 'https://i.pinimg.com/564x/aa/ee/87/aaee871857ab5056462fde7b9cc54be8.jpg' },
                title: "High quality Art work",
                description: "... for a fraction of the price"
            },
            {
                id: 5,
                image: { uri: 'https://i.pinimg.com/564x/a0/49/0a/a0490afb165c6a84e16ed85ef9bc22a2.jpg' },
                title: "Top Notch Artists",
                description: "... all in one place"
            },
        ],
        isButton: true,
        titlePosition: 'top',
        headerStyle: { color: '#278194' },
        descriptionStyle: { color: '#278194' },
        buttonStyle: { backgroundColor: '#278194' },
        scrollEnabled: true,
        onLastSlideButtonPress: () => {
            Alert.alert("I am clicked");
        },
    },
};

export const AppIntroSliderTitleOnBottom: StoryObj<typeof AppIntroSlider> = {
    args: {
        sliderData: [
            {
                id: 1,
                image: { uri: 'https://i.pinimg.com/564x/c2/8e/f7/c28ef73bb6e30baec40e2c14fb5180dc.jpg' },
                title: "Welcome",
                description: "We’re glad that that you are here, We’re glad that that you are here"
            },
            {
                id: 2,
                image: { uri: 'https://i.pinimg.com/564x/de/31/eb/de31eb72c52f09fd76568e07dd16bc3e.jpg' },
                title: "Best deal on the market",
                description: "... let's find your next art"
            },
            {
                id: 3,
                image: { uri: 'https://i.pinimg.com/564x/e1/79/6c/e1796cd9652099751dac2ee632dd3d1d.jpg' },
                title: "It's all about art",
                description: "... seriously, it is"
            },
            {
                id: 4,
                image: { uri: 'https://i.pinimg.com/564x/aa/ee/87/aaee871857ab5056462fde7b9cc54be8.jpg' },
                title: "High quality Art work",
                description: "... for a fraction of the price"
            },
            {
                id: 5,
                image: { uri: 'https://i.pinimg.com/564x/a0/49/0a/a0490afb165c6a84e16ed85ef9bc22a2.jpg' },
                title: "Top Notch Artists",
                description: "... all in one place"
            },
        ],
        isButton: true,
        titlePosition: 'bottom',
        headerStyle: { color: '#278194' },
        descriptionStyle: { color: '#278194' },
        buttonStyle: { backgroundColor: '#278194' },
        scrollEnabled: true,
        onLastSlideButtonPress: () => {
            Alert.alert("I am clicked");
        },
    },
};

export const AppIntroSliderWithoutButton: StoryObj<typeof AppIntroSlider> = {
    args: {
        sliderData: [
            {
                id: 1,
                image: { uri: 'https://i.pinimg.com/564x/c2/8e/f7/c28ef73bb6e30baec40e2c14fb5180dc.jpg' },
                title: "Welcome",
                description: "We’re glad that that you are here, We’re glad that that you are here"
            },
            {
                id: 2,
                image: { uri: 'https://i.pinimg.com/564x/de/31/eb/de31eb72c52f09fd76568e07dd16bc3e.jpg' },
                title: "Best deal on the market",
                description: "... let's find your next art"
            },
            {
                id: 3,
                image: { uri: 'https://i.pinimg.com/564x/e1/79/6c/e1796cd9652099751dac2ee632dd3d1d.jpg' },
                title: "It's all about art",
                description: "... seriously, it is"
            },
            {
                id: 4,
                image: { uri: 'https://i.pinimg.com/564x/aa/ee/87/aaee871857ab5056462fde7b9cc54be8.jpg' },
                title: "High quality Art work",
                description: "... for a fraction of the price"
            },
            {
                id: 5,
                image: { uri: 'https://i.pinimg.com/564x/a0/49/0a/a0490afb165c6a84e16ed85ef9bc22a2.jpg' },
                title: "Top Notch Artists",
                description: "... all in one place"
            },
        ],
        isButton: false,
        titlePosition: 'top',
        headerStyle: { color: '#278194' },
        descriptionStyle: { color: '#278194' },
        buttonStyle: { backgroundColor: '#278194' },
        scrollEnabled: true,
        onLastSlideButtonPress: () => {
            Alert.alert("I am clicked");
        },
    },
};

export const AppIntroSliderWithoutSlider: StoryObj<typeof AppIntroSlider> = {
    args: {
        sliderData: [
            {
                id: 1,
                image: { uri: 'https://i.pinimg.com/564x/c2/8e/f7/c28ef73bb6e30baec40e2c14fb5180dc.jpg' },
                title: "Welcome",
                description: "We’re glad that that you are here, We’re glad that that you are here"
            },
            {
                id: 2,
                image: { uri: 'https://i.pinimg.com/564x/de/31/eb/de31eb72c52f09fd76568e07dd16bc3e.jpg' },
                title: "Best deal on the market",
                description: "... let's find your next art"
            },
            {
                id: 3,
                image: { uri: 'https://i.pinimg.com/564x/e1/79/6c/e1796cd9652099751dac2ee632dd3d1d.jpg' },
                title: "It's all about art",
                description: "... seriously, it is"
            },
            {
                id: 4,
                image: { uri: 'https://i.pinimg.com/564x/aa/ee/87/aaee871857ab5056462fde7b9cc54be8.jpg' },
                title: "High quality Art work",
                description: "... for a fraction of the price"
            },
            {
                id: 5,
                image: { uri: 'https://i.pinimg.com/564x/a0/49/0a/a0490afb165c6a84e16ed85ef9bc22a2.jpg' },
                title: "Top Notch Artists",
                description: "... all in one place"
            },
        ],
        isButton: true,
        titlePosition: 'top',
        headerStyle: { color: '#278194' },
        descriptionStyle: { color: '#278194' },
        buttonStyle: { backgroundColor: '#278194' },
        scrollEnabled: false,
        onLastSlideButtonPress: () => {
            Alert.alert("I am clicked");
        },
    },
};
