import { View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ProgressBarProps } from "./ProgressBarProps";

const ProgressBar = (props: ProgressBarProps) => {
  const {
    progressValue = 0,
    progressBarBackgroundColor = "#C0C0C0",
    progressBarColor = "#4169E1",
    borderRadius = 50,
    height = 15,
  } = props;
  const currentProgress = useSharedValue(0);

  // For starting the animation
  const startAnimation = () => {
    currentProgress.value = withTiming(progressValue * 100, {
      duration: 1000,
      easing: Easing.elastic(1.2),
    });
  };

  // For getting the animated styles
  const animatedStyles = useAnimatedStyle(() => ({
    width: `${currentProgress.value}%`,
  }));

  useEffect(() => {
    if (progressValue >= 0 && progressValue <= 1) {
      startAnimation();
    } else {
      throw new Error("progressValue must be between 0 and 1");
    }

    return () => {};
  }, [progressValue]);

  return (
    <View
      style={{
        height,
        width: "100%",
        backgroundColor: progressBarBackgroundColor,
        borderRadius,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={[
          {
            height,
            backgroundColor: progressBarColor,
            borderRadius,
          },
          animatedStyles,
        ]}
      />
    </View>
  );
};

export default ProgressBar;
