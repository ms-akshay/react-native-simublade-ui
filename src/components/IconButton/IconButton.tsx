import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { IconButtonProps } from "./IconButtonProps";
import { styles } from "./styles";

export const IconButton = ({
  onPress,
  containerStyle,
  source,
  color,
  size,
  disabled,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
      hitSlop={{ top: 6, left: 6, bottom: 6, right: 6 }}
      disabled={disabled}
    >
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          tintColor: color,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
