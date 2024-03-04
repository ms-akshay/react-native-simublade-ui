import { View, TextInput } from "react-native";
import React from "react";
import { SearchBarProps } from "./SearchBarProps";
import { styles } from "./styles";
import { IconButton } from "../IconButton/IconButton";

const SearchBar = ({
  value,
  placeholder,
  leftIcon,
  rightIcon,
  onChangeText,
  onRightIconPress,
  textInputStyle,
  placeholderTextColor,
  enabledAutoCorrect = false,
  onSubmitEditing,
  searchContainerStyle,
}: SearchBarProps) => {
  return (
    <View style={[styles.searchBarContainer, searchContainerStyle]}>
      {leftIcon && (
        <IconButton
          source={leftIcon}
          size={24}
          disabled
          containerStyle={styles.iconStyle}
        />
      )}
      <TextInput
        value={value}
        placeholder={placeholder || "Search"}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        style={[styles.inputStyle, textInputStyle]}
        autoCorrect={enabledAutoCorrect}
        returnKeyType="done"
      />
      {rightIcon && (
        <IconButton
          source={rightIcon}
          onPress={onRightIconPress}
          size={24}
          containerStyle={styles.iconStyle}
        />
      )}
    </View>
  );
};

export default SearchBar;
