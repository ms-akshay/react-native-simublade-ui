import React from "react";
import { TextInput, View } from "react-native";
import { AppTextInputProps } from "./AppTextInputProps";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";
import IconButton from "../../IconButton/IconButton";

const AppTextInput = ({
  type = "flat",
  label = "Your label here",
  value,
  inputContainerStyle,
  textInputStyle,
  handleOnFocus,
  handleOnBlur,
  handOnSubmitEditing,
  isEditable,
  error = false,
  textInputFocusedBorderColor = "#FC6A03",
  textInputBlurredBorderColor = "#000000",
  rightIcon,
  onRightIconPress,
  labelColor = "#000000",
  textInputKeyboardType,
  multiline,
  numberOfLines,
  ...otherProps
}: AppTextInputProps) => {
  const borderBottomColor = useSharedValue(textInputBlurredBorderColor);
  const borderColor = useSharedValue(textInputBlurredBorderColor);
  const offset = useSharedValue(value ? -20 : multiline ? 10 : 20);
  const labelColorValue = useSharedValue(labelColor);

  /*
  These are for the flat input mode
   */

  // Start border bottom animation
  const startBorderBottomAnimation = () => {
    borderBottomColor.value = textInputFocusedBorderColor;
    labelColorValue.value = textInputFocusedBorderColor;
  };

  // Reset border bottom animation
  const resetBorderBottomAnimation = () => {
    borderBottomColor.value = textInputBlurredBorderColor;
    labelColorValue.value = labelColor;
  };

  // For getting animated border bottom
  const animatedBottomBorderStyles = useAnimatedStyle(() => {
    return {
      borderBottomColor: withTiming(borderBottomColor.value, {
        duration: 500,
        easing: Easing.linear,
      }),
    };
  });

  /*
  These are for the outlined input mode
   */

  // Start border bottom animation
  const startBorderAnimation = () => {
    borderColor.value = textInputFocusedBorderColor;
    offset.value = -20;
    labelColorValue.value = textInputFocusedBorderColor;
  };

  // Reset border bottom animation
  const resetBorderAnimation = (fieldValue: string) => {
    borderColor.value = textInputBlurredBorderColor;
    offset.value = multiline ? (fieldValue ? -20 : 10) : fieldValue ? -20 : 20;
    labelColorValue.value = labelColor;
  };

  // For getting animated border bottom color value
  const animatedBorderStyles = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(borderColor.value, {
        duration: 500,
        easing: Easing.linear,
      }),
    };
  });

  // For getting animated top value
  const animatedTopStyles = useAnimatedStyle(() => {
    return {
      top: withTiming(offset.value, {
        duration: 500,
        easing: Easing.linear,
      }),
    };
  });

  // For getting animated label color value
  const animatedLabelColorStyles = useAnimatedStyle(() => {
    return {
      color: withTiming(labelColorValue.value, {
        duration: 500,
        easing: Easing.linear,
      }),
    };
  });

  return type === "flat" ? (
    <Animated.View
      style={[
        styles.flatMainContainer,
        inputContainerStyle,
        animatedBottomBorderStyles,
      ]}
    >
      {label && (
        <Animated.Text
          style={[
            {
              fontSize: 14,
              lineHeight: 16,
            },
            animatedLabelColorStyles,
          ]}
        >
          {label}
        </Animated.Text>
      )}

      <View style={styles.textInputContainer}>
        <TextInput
          {...otherProps}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={textInputKeyboardType}
          editable={isEditable}
          onFocus={() => {
            startBorderBottomAnimation();

            // Call handle on focus function
            handleOnFocus?.();
          }}
          onBlur={() => {
            resetBorderBottomAnimation();

            // Call handle on blur function
            handleOnBlur?.();
          }}
          onSubmitEditing={handOnSubmitEditing}
          style={[textInputStyle, styles.textInputStyles]}
        />

        {/* Icon to render on right */}
        {rightIcon && (
          <IconButton source={rightIcon} size={24} onPress={onRightIconPress} />
        )}
      </View>
    </Animated.View>
  ) : (
    <View
      style={{
        justifyContent: "center",
        paddingVertical: 20,
        width: "100%",
      }}
    >
      <Animated.View
        style={[
          styles.outLinedMainContainer,
          inputContainerStyle,
          animatedBorderStyles,
        ]}
      >
        {label && (
          <Animated.View
            style={[
              {
                flex: 1,
                justifyContent: "center",
                position: "absolute",
                left: 12,
              },
              animatedTopStyles,
            ]}
          >
            <Animated.Text
              style={[
                {
                  fontSize: 14,
                  lineHeight: 16,
                },
                animatedLabelColorStyles,
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        )}

        <View style={[styles.textInputContainer]}>
          <TextInput
            {...otherProps}
            value={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
            keyboardType={textInputKeyboardType}
            placeholder=""
            editable={isEditable}
            onFocus={() => {
              startBorderAnimation();

              // Call handle on focus function
              handleOnFocus?.();
            }}
            onBlur={() => {
              resetBorderAnimation(value);

              // Call handle on blur function
              handleOnBlur?.();
            }}
            onSubmitEditing={handOnSubmitEditing}
            style={[textInputStyle, styles.textInputStyles]}
          />

          {/* Icon to render on right */}
          {rightIcon && (
            <IconButton
              source={rightIcon}
              size={24}
              onPress={onRightIconPress}
            />
          )}
        </View>
      </Animated.View>
    </View>
  );
};

export default AppTextInput;
