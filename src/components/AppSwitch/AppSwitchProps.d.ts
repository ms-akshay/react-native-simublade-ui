import { ColorValue } from "react-native";

/**
 *
 * @param props
 *
 * @param isEnabled: The value of the switch
 * @param isDisabled: If true user won't be able to toggle the switch. Default is false
 * @param handleValueChange: Handling the switch value change
 * @param iOSBackgroundColor: Custom color for the background on iOS. Can be seen when the switch value is false or when the switch is disabled. Default value is "#767577"
 * @param thumbEnabledColor: Color of the thumb when switch is enabled. Default value is  "#f5dd4b"
 * @param thumbDisabledColor: Color of the thumb when switch is disabled. Default value is "#f4f3f4"
 * @param trackEnabledColor: Color of the track when switch is enabled. Default value is "#81b0ff"
 * @param trackDisabledColor: Color of the track when switch is disabled. Default value is "#767577"
 */

export type AppSwitchProps = {
  isEnabled: boolean;
  isDisabled?: boolean;
  handleValueChange: (value: boolean) => void;
  iOSBackgroundColor?: ColorValue;
  thumbEnabledColor?: ColorValue;
  thumbDisabledColor?: ColorValue;
  trackEnabledColor?: ColorValue;
  trackDisabledColor?: ColorValue;
};
