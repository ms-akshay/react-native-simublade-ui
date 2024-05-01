import { ColorValue } from "react-native";

/**
 *
 * @param props
 *
 * @param text: The text to display
 * @param style: Styles applied to the typography component
 * @param subVariant: The text sub variant to use
 */

export type VariantProps = {
  text: string;
  style: ViewStyle;
  subVariant: "small" | "medium" | "large";
  numberOfLines?: number | undefined;
};

/**
 *
 * @param props
 *
 * @param text: The text to display
 * @param textWrapperStyle: Styles applied to the typography component
 */

export type TextWrapperProps = {
  text: string;
  textWrapperStyle: StyleProp<TextStyle>;
  numberOfLines?: number | undefined;
};

/**
 *
 * @param props
 *
 * @param typographyText: The text to display
 * @param variant: The text variant to use
 * @param subVariant: The text sub variant to use
 * @param style: Styles applied to the typography component
 */

export type TypographyProps = {
  typographyText: string;
  variant: "display" | "headline" | "title" | "body" | "label";
  subVariant: "small" | "medium" | "large";
  style?: StyleProp<TextStyle>;
};
