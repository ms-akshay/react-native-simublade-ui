import React from "react";
import TextWrapper from "../TextWrapper";
import { VariantProps } from "../TypographyProps";

const HeadLine = ({ text, subVariant, style, numberOfLines }: VariantProps) => {
  return (
    <TextWrapper
      text={text}
      textWrapperStyle={[
        style,
        {
          fontSize:
            subVariant === "large" ? 32 : subVariant === "medium" ? 30 : 28,
          lineHeight:
            subVariant === "large" ? 30 : subVariant === "medium" ? 28 : 26,
        },
      ]}
      numberOfLines={numberOfLines}
    />
  );
};

export default HeadLine;
