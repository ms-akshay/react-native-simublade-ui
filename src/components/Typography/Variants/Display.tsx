import React from "react";
import TextWrapper from "../TextWrapper";
import { VariantProps } from "../TypographyProps";

const Display = ({ text, subVariant, style, numberOfLines }: VariantProps) => {
  return (
    <TextWrapper
      text={text}
      textWrapperStyle={[
        style,
        {
          fontSize:
            subVariant === "large" ? 38 : subVariant === "medium" ? 36 : 34,
          lineHeight:
            subVariant === "large" ? 36 : subVariant === "medium" ? 34 : 32,
        },
      ]}
      numberOfLines={numberOfLines}
    />
  );
};

export default Display;
