import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PDFViewer from "./PDFViewer";

const PDFViewerMeta: Meta<typeof PDFViewer> = {
  title: "PDFViewer",
  component: PDFViewer,
  argTypes: {},
  args: {
    source: {
      uri: "https://www.princexml.com/howcome/2016/samples/magic6/magic.pdf",
      cache: true,
    },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default PDFViewerMeta;

export const PDFView: StoryObj<typeof PDFViewer> = {};
