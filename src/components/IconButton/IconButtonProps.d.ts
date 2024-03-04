import { ViewStyle } from "react-native";

export type IconButtonProps = {
  onPress: () => void;
  containerStyle: ViewStyle;
  source: any;
  color?: string;
  size: number;
  disabled: boolean;
};
