/**
 *
 * @param props
 *
 * @param progressValue: Progress value (between 0 and 1)
 * @param progressBarBackgroundColor: Background color of the progress bar background. Default value is #C0C0C0
 * @param progressBarColor: Background color of the progress bar. Default value is #4169E1
 * @param borderRadius: Border radius provided to the progress bar. Default value is 50
 * @param height: Height of the progress bar. Default value is 15
 */

import { Animated, ColorValue } from "react-native";

export type ProgressBarProps = {
  progressValue: number;
  progressBarBackgroundColor?: ColorValue;
  progressBarColor?: ColorValue;
  borderRadius?: number;
  height?: number;
};
