import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./Buttons";

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
