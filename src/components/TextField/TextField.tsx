import { TextFieldProps } from "./TextFieldProps";
import { TextFieldEnum } from "../../utils/enumUtil";
import AppTextInput from "./AppTextInput/AppTextInput";
import React, { useState } from "react";
import { Image } from "../../utils/images";

const TextField = ({
  value,
  fieldType,
  passwordVisibleIcon,
  passwordHiddenIcon,
  numberOfLines = 60,
  ...otherProps
}: TextFieldProps) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);

  switch (fieldType) {
    // EMAIL
    case TextFieldEnum.EMAIL_TYPE:
      return (
        <AppTextInput
          {...otherProps}
          value={value}
          textInputKeyboardType={"email-address"}
        />
      );

    // NUMBER
    case TextFieldEnum.NUMBER_TYPE:
      return (
        <AppTextInput
          {...otherProps}
          value={value}
          textInputKeyboardType={"number-pad"}
        />
      );

    // DECIMAL
    case TextFieldEnum.DECIMAL_TYPE:
      return (
        <AppTextInput
          {...otherProps}
          value={value}
          textInputKeyboardType={"decimal-pad"}
        />
      );

    // PASSWORD
    case TextFieldEnum.PASSWORD_TYPE:
      return (
        <AppTextInput
          {...otherProps}
          value={value}
          secureTextEntry={isSecureTextEntry}
          rightIcon={
            isSecureTextEntry
              ? passwordHiddenIcon || Image.eye_icon_open
              : passwordVisibleIcon || Image.eye_icon_closed
          }
          onRightIconPress={() => {
            setIsSecureTextEntry((prevState: boolean) => !prevState);
          }}
        />
      );

    // DESCRIPTION
    case TextFieldEnum.DESCRIPTION_TYPE:
      return (
        <AppTextInput
          {...otherProps}
          multiline={true}
          numberOfLines={numberOfLines}
          value={value}
          textInputKeyboardType={"default"}
          inputContainerStyle={{
            height: 120,
          }}
        />
      );

    default:
      return (
        <AppTextInput
          {...otherProps}
          value={value}
          textInputKeyboardType={"default"}
        />
      );
  }
};

export default TextField;
