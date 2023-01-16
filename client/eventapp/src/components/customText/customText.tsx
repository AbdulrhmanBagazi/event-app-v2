import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {styles} from './styles.customText';

type fontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

type ColorType =
  | 'OnBackground'
  | 'onError'
  | 'OnPrimary'
  | 'OnSurface'
  | 'OnSecondary';

const CustomText: React.FC<{
  text: String;
  fontWeight: fontWeightType;
  Color: ColorType;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}> = ({text, fontWeight, style, Color, numberOfLines}) => {
  const {isDarkMode, Theme} = UseThemeContext() as ThemeContextType;

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        style,
        styles.customeText,
        {
          fontWeight: fontWeight,
          color: isDarkMode ? Theme.dark[Color] : Theme.light[Color],
        },
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;
