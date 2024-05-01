import { StyleProp, ViewStyle } from "react-native";
import { PdfProps } from "react-native-pdf";

/**
 *
 * @param props
 *
 * @param pdfContainerStyle: Style given to the pdf viewer container
 *
 */

export interface PDFViewerProps extends PdfProps {
  pdfContainerStyle: StyleProp<ViewStyle>;
}
