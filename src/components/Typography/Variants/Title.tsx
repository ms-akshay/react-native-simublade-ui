import React from "react";
import TextWrapper from "../TextWrapper";
import { VariantProps } from "../TypographyProps";

const Title = ({ text, subVariant, style, numberOfLines }: VariantProps) => {
  return (
    <TextWrapper
      text={text}
      textWrapperStyle={[
        style,
        {
          fontSize:
            subVariant === "large" ? 26 : subVariant === "medium" ? 24 : 22,
          lineHeight:
            subVariant === "large" ? 28 : subVariant === "medium" ? 26 : 24,
        },
      ]}
      numberOfLines={numberOfLines}
    />
  );
};

export default Title;
