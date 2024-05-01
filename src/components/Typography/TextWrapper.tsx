import { Text } from "react-native";
import React from "react";
import { TextWrapperProps } from "./TypographyProps";

const TextWrapper = ({
  text,
  textWrapperStyle,
  numberOfLines,
}: TextWrapperProps) => {
  return (
    <Text style={textWrapperStyle} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default TextWrapper;
