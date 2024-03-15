import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  containerStyle: ViewProps<ViewStyle>
  title: string;
  textStyle?: TextStyle
};
