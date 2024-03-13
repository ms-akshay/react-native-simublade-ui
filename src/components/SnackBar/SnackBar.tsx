import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SnackBarProps } from "./SnackBarProps";
import { styles } from "./styles";

const Snackbar = ({
  message,
  heading,
  actionText,
  onActionPress,
  duration = 3000, // Default duration in milliseconds
  position = "bottom", // Default position
  containerStyle,
  messageStyle,
  headingText,
  textContainer,
  backgroundColor,
  IconbackgroundColor,
  textColor,
  source,
  color,
  size,
}: SnackBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, duration]);

  return isVisible ? (
    <View
      style={[
        styles.container,
        position === "top" ? styles.topContainer : styles.bottomContainer,
        containerStyle,
        { backgroundColor: backgroundColor },
      ]}
    >
      <View style={[styles.msgTypeImageContainer,
      { backgroundColor: IconbackgroundColor },]}>
        <Image source={source}
          style={{
            width: size,
            height: size,
            tintColor: color,
          }}
          resizeMode="contain" />
      </View>
      <View style={[styles.textContainer, textContainer]}>
        <Text style={[styles.headingText, headingText, { color: textColor }]}>
          {heading}
        </Text>
        <Text style={[styles.messageText, messageStyle, { color: textColor }]}>
          {message}
        </Text>
      </View>
      {actionText && (
        <TouchableOpacity
          style={styles.crossIconContainer}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={onActionPress}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828665.png'}}
            style={{
              width: 12,
              height: 12,
              tintColor: color,
            }}
            resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  ) : null;
};



export default Snackbar;