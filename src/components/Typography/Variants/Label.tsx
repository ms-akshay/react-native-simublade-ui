import React from "react";
import TextWrapper from "../TextWrapper";
import { VariantProps } from "../TypographyProps";

const Label = ({ text, subVariant, style, numberOfLines }: VariantProps) => {
  return (
    <TextWrapper
      text={text}
      textWrapperStyle={[
        style,
        {
          fontSize:
            subVariant === "large" ? 20 : subVariant === "medium" ? 18 : 16,
          lineHeight:
            subVariant === "large" ? 22 : subVariant === "medium" ? 20 : 18,
        },
      ]}
      numberOfLines={numberOfLines}
    />
  );
};

export default Label;
