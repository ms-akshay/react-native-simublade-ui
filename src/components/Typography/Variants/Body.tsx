import React from "react";
import TextWrapper from "../TextWrapper";
import { VariantProps } from "../TypographyProps";

const Body = ({ text, subVariant, style, numberOfLines }: VariantProps) => {
  return (
    <TextWrapper
      text={text}
      textWrapperStyle={[
        style,
        {
          fontSize:
            subVariant === "large" ? 14 : subVariant === "medium" ? 12 : 10,
          lineHeight:
            subVariant === "large" ? 16 : subVariant === "medium" ? 14 : 12,
        },
      ]}
      numberOfLines={numberOfLines}
    />
  );
};

export default Body;
