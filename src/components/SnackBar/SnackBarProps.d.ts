import { ColorValue, ImageSourcePropType, TextStyle, ViewStyle } from "react-native";


/**
 *
 * @param props
 *
 * @param message
 * @param heading
 * @param actionText
 * @param onActionPress
 * @param duration
 * @param position
 * @param containerStyle
 * @param messageStyle
 * @param actionTextStyle
 * @param backgroundColor
 * @param IconbackgroundColor
 * @param textColor
 * @param actionTextColor
 * @param size
 * @param color
 */

export type SnackBarProps = {
    message?: string;
    heading?: string;
    actionText?: string;
    onActionPress?: () => void;
    duration?: number
    position?: any
    containerStyle?: ViewStyle;
    headingText?: TextStyle;
    messageStyle?: TextStyle;
    backgroundColor?: ColorValue;
    IconbackgroundColor?: ColorValue;
    textColor?: ColorValue;
    source?: ImageSourcePropType | undefined;
    color?: string,
    size?: number,
    textContainer?: ViewStyle;
};