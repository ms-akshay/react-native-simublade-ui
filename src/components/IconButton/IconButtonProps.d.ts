import { ViewStyle } from "react-native";

/**
 *
 * @param props
 *
 * @param onPress: Method to handle text input on change
 * @param containerStyle: Styles applied to the image container
 * @param source: Source of the icon i.e., in form {uri : URL_OF_IMAGE} or through a path,
 * @param color: Tint color of the icon
 * @param size: Size of the icon
 * @param disabled: Whether interaction is disabled or not. Default is false
 */

export type IconButtonProps = {
  onPress?: () => void;
  containerStyle?: ViewStyle;
  source: any;
  color?: string;
  size: number;
  disabled?: boolean;
};
