import { ImageSourcePropType } from "react-native";
import { TextFieldEnum } from "../../utils/enumUtil";
import { AppTextInputProps } from "./AppTextInput/AppTextInputProps";

/**
 *
 * @param props
 *
 * @param fieldType: Input field type to be used
 * @param passwordVisibleIcon: The right icon to use when field is non-secured for password type field
 * @param passwordHiddenIcon: The right icon to use when field is secured for password type field
 *
 */

interface TextFieldProps extends AppTextInputProps {
  fieldType?: TextFieldEnum;
  passwordVisibleIcon?: ImageSourcePropType;
  passwordHiddenIcon?: ImageSourcePropType;
}
