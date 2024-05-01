import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Typography from "./Typography";

const TypographyMeta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default TypographyMeta;

export const DisplayLarge: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Display Large",
    variant: "display",
    subVariant: "large",
  },
};

export const DisplayMedium: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Display Medium",
    variant: "display",
    subVariant: "medium",
  },
};

export const DisplaySmall: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Display Small",
    variant: "display",
    subVariant: "small",
  },
};

export const HeadlineLarge: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Headline Large",
    variant: "headline",
    subVariant: "large",
  },
};

export const HeadlineMedium: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Headline Medium",
    variant: "headline",
    subVariant: "medium",
  },
};

export const HeadlineSmall: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Headline Small",
    variant: "headline",
    subVariant: "small",
  },
};

export const TitleLarge: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Title Large",
    variant: "title",
    subVariant: "large",
  },
};

export const TitleMedium: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Title Medium",
    variant: "title",
    subVariant: "medium",
  },
};

export const TitleSmall: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Title Small",
    variant: "title",
    subVariant: "small",
  },
};

export const LabelLarge: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Label Large",
    variant: "body",
    subVariant: "large",
  },
};

export const LabelMedium: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Label Medium",
    variant: "body",
    subVariant: "medium",
  },
};

export const LabelSmall: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Label Small",
    variant: "body",
    subVariant: "small",
  },
};

export const BodyLarge: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Body Large",
    variant: "body",
    subVariant: "large",
  },
};

export const BodyMedium: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Body Medium",
    variant: "body",
    subVariant: "medium",
  },
};

export const BodySmall: StoryObj<typeof Typography> = {
  argTypes: {},
  args: {
    typographyText: "This is Body Small",
    variant: "body",
    subVariant: "small",
  },
};
