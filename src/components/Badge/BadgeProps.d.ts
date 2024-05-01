import { ColorValue, StyleProp, TextStyle } from "react-native";
import { PdfProps } from "react-native-pdf";

/**
 *
 * @param props
 *
 * @param isBadgeVisible: Whether the badge will be visible or not
 * @param children: Content to render on the badge
 * @param size: Size of the badge
 * @param style: Styles applied to the badge children
 * @param backgroundColor: Background color applied to the badge text container
 * @param padding: Padding applied to the badge text container
 *
 */

export interface BadgeProps extends PdfProps {
  isBadgeVisible?: boolean;
  children: string | number;
  size?: number;
  style?: StyleProp<TextStyle>;
  backgroundColor?: ColorValue;
  padding?: number;
}
