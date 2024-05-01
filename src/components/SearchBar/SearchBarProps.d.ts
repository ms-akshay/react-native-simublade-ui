import { ColorValue, TextStyle, ViewStyle } from "react-native";

/**
 *
 * @param props
 *
 * @param placeholder: The placeholder text to use
 * @param placeholderTextColor: Color of the placeholder text
 * @param enabledAutoCorrect: Whether to enable or disable auto-correct.     Default is false
 * @param value: The value of the text input
 * @param leftIcon: Left icon to use
 * @param rightIcon: Right icon to use
 * @param textInputStyle: Styles to apply to the text input component
 * @param searchContainerStyle: Styles to apply to the outer container containing text input and icons
 * @param onChangeText: Method to handle text input on change
 * @param onRightIconPress: Handle right icon press
 * @param onSubmitEditing: Handle onSubmit button press
 */

export type SearchBarProps = {
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  enabledAutoCorrect?: boolean;
  value: string;
  leftIcon?: any;
  rightIcon?: any;
  textInputStyle?: TextStyle;
  searchContainerStyle?: ViewStyle;
  onChangeText: (value: string) => void;
  onRightIconPress?: () => void;
  onSubmitEditing?: () => void;
};
