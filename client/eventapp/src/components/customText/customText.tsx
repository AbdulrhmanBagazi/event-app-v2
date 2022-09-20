import React, {useMemo} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {styles} from './styles.customText';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

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
  const {isDarkMode, Theme} = useThemeContext() as ThemeContextType;

  const progress = useDerivedValue(() => {
    return isDarkMode ? withTiming(1) : withTiming(0);
  });
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [Theme.light[Color], Theme.dark[Color]],
    ),
  }));
  const textStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  );

  return (
    <Animated.Text
      numberOfLines={numberOfLines}
      style={[
        style,
        styles.customeText,
        textStyle,
        {
          fontWeight: fontWeight,
        },
      ]}>
      {text}
    </Animated.Text>
  );
};

export default CustomText;
