import { Text, View } from "react-native";
import React from "react";
import { BadgeProps } from "./BadgeProps";

const Badge = ({
  isBadgeVisible = true,
  children,
  size = 20,
  style,
  backgroundColor = "red",
  padding = 4,
}: BadgeProps) => {
  return (
    <View
      style={[
        {
          borderRadius: size / 2,
          width: size,
          height: size,
          padding,
          backgroundColor,
          opacity: isBadgeVisible ? 1 : 0,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text
        numberOfLines={1}
        style={[
          {
            fontSize: 10,
            lineHeight: 12,
            color: "white",
          },
          style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default Badge;
