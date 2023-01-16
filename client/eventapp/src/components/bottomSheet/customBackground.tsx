import React from 'react';
import {BottomSheetBackgroundProps} from '@gorhom/bottom-sheet';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {View} from 'react-native';

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({style}) => {
  const {isDarkMode, Theme} = UseThemeContext() as ThemeContextType;

  return (
    <View
      pointerEvents="none"
      style={[
        style,
        {
          backgroundColor: isDarkMode
            ? Theme.dark.Background
            : Theme.light.Surface,
        },
      ]}
    />
  );
};

export default CustomBackground;
