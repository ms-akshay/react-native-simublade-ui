import React from "react";
import { TypographyProps } from "./TypographyProps";
import Display from "./Variants/Display";
import HeadLine from "./Variants/Headline";
import Title from "./Variants/Title";
import Body from "./Variants/Body";
import Label from "./Variants/Label";
import { Text } from "react-native";

const Typography = ({
  typographyText,
  variant,
  subVariant,
  style,
}: TypographyProps) => {
  switch (variant) {
    case "display":
      return (
        <Display text={typographyText} subVariant={subVariant} style={style} />
      );
    case "headline":
      return (
        <HeadLine text={typographyText} subVariant={subVariant} style={style} />
      );
    case "title":
      return (
        <Title text={typographyText} subVariant={subVariant} style={style} />
      );
    case "label":
      return (
        <Label text={typographyText} subVariant={subVariant} style={style} />
      );
    case "body":
      return (
        <Body text={typographyText} subVariant={subVariant} style={style} />
      );

    default:
      <Text>{typographyText}</Text>;
  }
};

export default Typography;
