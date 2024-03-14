import { View, Animated, Easing } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ProgressBarProps } from "./ProgressBarProps";

const ProgressBar = (props: ProgressBarProps) => {
  const {
    progressValue = 0,
    progressBarBackgroundColor = "#C0C0C0",
    progressBarColor = "#4169E1",
    borderRadius = 50,
    height = 15,
  } = props;
  const currentProgress = useRef(new Animated.Value(0)).current;
  const [progressBarWidth, setProgressBarWidth] = useState(
    new Animated.Value(0)
  );

  // Function for starting the animation
  const startAnimation = () => {
    Animated.timing(currentProgress, {
      toValue: progressValue * 100,
      duration: 1000,
      easing: Easing.elastic(1.2),
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (progressValue >= 0 && progressValue <= 1) {
      startAnimation();
    } else {
      throw new Error("progressValue must be between 0 and 1");
    }

    return () => {
      currentProgress.resetAnimation();
    };
  }, [progressValue]);

  return (
    <View
      style={{
        height,
        width: "100%",
        backgroundColor: progressBarBackgroundColor,
        borderRadius,
      }}
      onLayout={(event) => {
        setProgressBarWidth(new Animated.Value(event.nativeEvent.layout.width));
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          width: Animated.divide(
            Animated.multiply(currentProgress, progressBarWidth),
            100
          ),
          height,
          backgroundColor: progressBarColor,
          borderRadius,
        }}
      />
    </View>
  );
};

export default ProgressBar;
