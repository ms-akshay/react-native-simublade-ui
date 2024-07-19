import { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from "react-native";
/**
 *
 * @param props
 * 
 * @param sliderData
 * @param containerStyle
 * @param bgImageStyle
 * @param headerStyle
 * @param descriptionStyle
 * @param buttonStyle
 * @param isButton
 * @param titlePosition
 * @param paginationDots
 * @param noTitle
 * @param scrollEnabled
 * @param delay
 * @param onLastSlideButtonPress
 * 
 */


export type AppIntroSliderProps = {
    sliderData: Array<{ id: number; image: ImageSourcePropType, title: string, description: string }>;
    onLastSlideButtonPress: () => void;
    containerStyle?: ViewStyle;
    bgImageStyle?: ImageStyle;
    headerStyle?: TextStyle;
    descriptionStyle?: TextStyle;
    buttonStyle?: ViewStyle
    isButton?: boolean;
    titlePosition?: string;
    paginationDots?: ViewStyle;
    noTitle?: boolean;
    scrollEnabled?: boolean;
    delay?: number;

};
