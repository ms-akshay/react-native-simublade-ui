import {
  ColorValue,
  ImageSourcePropType,
  KeyboardType,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { AnimatableValue } from "react-native-reanimated";
import { TextFieldEnum } from "../../../utils/enumUtil";

/**
 *
 * @param props
 *
 * @param type: Text input variant whether flat or outlined
 * @param value: Value given to the text input field
 * @param label: Label given to the text input field
 * @param placeholder: Placeholder given to the text input field
 * @param error: Whether to style the TextInput with error style
 * @param textInputFocusedBorderColor: Color applied to text input border when it is focused
 * @param textInputBlurredBorderColor: Color applied to text input border when it is blurred
 * @param onChangeText: Whether to style the TextInput with error style
 * @param handleOnFocus: Callback that is called when text input is focused
 * @param handleOnBlur: Callback that is called when text input is blurred
 * @param handleOnSubmitEditing: Callback that is called when text input's submit button is pressed
 * @param inputContainerStyle: Styles applied to the input container style
 * @param textInputStyle: Styles applied to the text input style
 * @param rightIcon: Right icon to use in text input field
 * @param onRightIconPress: Handle right icon press
 * @param labelStyle: Styles applied to the label
 * @param textInputKeyboardType: Type of the keyboard used
 * @param multiline: If true, the text will be multiline
 * @param numberOfLines: The number of lines the multiline text can take
 *
 */

export interface AppTextInputProps {
  type?: "flat" | "outlined";
  value: string;
  label?: string;
  placeholder?: string;
  isEditable?: boolean;
  error?: boolean;
  textInputFocusedBorderColor?: DefaultStyle;
  textInputBlurredBorderColor?: DefaultStyle;
  onChangeText: (value: text) => void;
  handleOnFocus?: () => void;
  handleOnBlur?: () => void;
  handOnSubmitEditing?: () => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
  labelColor?: DefaultStyle;
  secureTextEntry?: boolean;
  textInputKeyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
}
