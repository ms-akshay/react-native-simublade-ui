import { Switch } from "react-native";
import React from "react";
import { AppSwitchProps } from "./AppSwitchProps";

const AppSwitch = ({
  isEnabled = false,
  isDisabled = false,
  handleValueChange,
  iOSBackgroundColor = "#767577",
  thumbEnabledColor = "#f5dd4b",
  thumbDisabledColor = "#f4f3f4",
  trackEnabledColor = "#81b0ff",
  trackDisabledColor = "#767577",
}: AppSwitchProps) => {
  return (
    <Switch
      trackColor={{ false: trackDisabledColor, true: trackEnabledColor }}
      thumbColor={isEnabled ? thumbEnabledColor : thumbDisabledColor}
      ios_backgroundColor={iOSBackgroundColor}
      onValueChange={handleValueChange}
      value={isEnabled}
      disabled={isDisabled}
    />
  );
};

export default AppSwitch;
