import React from 'react';
import {UseThemeContext} from '../context/theme/themeToggle.context';
import {ThemeContextType} from '../typs';

import {StyleProp, View, ViewStyle} from 'react-native';
type ColorType =
  | 'OnBackground'
  | 'Background'
  | 'Error'
  | 'onError'
  | 'Primary'
  | 'OnPrimary'
  | 'Surface'
  | 'OnSurface'
  | 'Secondary'
  | 'OnSecondary';

const AnimatedView: React.FC<{
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  Color: ColorType;
}> = ({children, Color, style}) => {
  const {isDarkMode, Theme} = UseThemeContext() as ThemeContextType;

  return (
    <View
      style={[
        style,
        {backgroundColor: isDarkMode ? Theme.dark[Color] : Theme.light[Color]},
      ]}>
      {children}
    </View>
  );
};

export default AnimatedView;
