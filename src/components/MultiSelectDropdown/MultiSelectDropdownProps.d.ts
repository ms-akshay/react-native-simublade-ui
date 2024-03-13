import { ImageStyle, TextStyle, ViewStyle } from "react-native";

/**
 *
 * @param props
 *
 * @param dropDownList
 * @param savedList
 * @param multiSelectPopup
 * @param onSelectItem
 * @param onChoose
 * @param onClosePopup
 * @param containerStyle
 * @param headerStyle,
 * @param modalStyle,
 * @param selectListTitleStyle,
 * @param cardViewStyle,
 * @param cardMainStyle,
 * @param imageStyle,
 * @param nameStyle,
 * @param footerStyle,
 * @param footerTextStyle
 */


export type AppSwitchProps = {
    dropDownList: Array<{ id: string; Name: string, Choose: boolean }>;
    multiSelectPopup: boolean
    onSelectItem?: (item: { id: string; Name: string }) => void;
    onChoose?: () => void;
    onClosePopup?: () => void;
    containerStyle?: ViewStyle;
    headerStyle?: ViewStyle;
    modalStyle?: ViewStyle;
    selectListTitleStyle?: TextStyle;
    cardViewStyle?: ViewStyle;
    cardMainStyle?: ViewStyle;
    imageStyle?: ImageStyle
    nameStyle?: TextStyle
    footerStyle?: ViewStyle
    footerTextStyle?: TextStyle
};


