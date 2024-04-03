import { View } from "react-native";
import React from "react";
import Pdf from "react-native-pdf";
import { styles } from "./styles";
import { PDFViewerProps } from "./PDFViewerProps";

const PDFViewer = ({
  pdfContainerStyle,
  source,
  ...otherProps
}: PDFViewerProps) => {
  return (
    <View style={[pdfContainerStyle]}>
      <Pdf {...otherProps} source={source} style={styles.pdf} />
    </View>
  );
};

export default PDFViewer;
