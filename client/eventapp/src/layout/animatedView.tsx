import React, {useMemo} from 'react';
import {UseThemeContext} from '../context/theme/themeToggle.context';
import {ThemeContextType} from '../typs';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {StyleProp, ViewStyle} from 'react-native';
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

  const progress = useDerivedValue(() => {
    return isDarkMode ? withTiming(1) : withTiming(0);
  });
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [Theme.light[Color], Theme.dark[Color]],
    ),
  }));
  const containerStyle = useMemo(
    () => [containerAnimatedStyle],
    [containerAnimatedStyle],
  );

  return (
    <Animated.View style={[containerStyle, style]}>{children}</Animated.View>
  );
};

export default AnimatedView;
