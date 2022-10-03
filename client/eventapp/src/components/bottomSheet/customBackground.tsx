import React, {useMemo} from 'react';
import {BottomSheetBackgroundProps} from '@gorhom/bottom-sheet';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({style}) => {
  const {isDarkMode, Theme} = UseThemeContext() as ThemeContextType;

  const progress = useDerivedValue(() => {
    return isDarkMode ? withTiming(1) : withTiming(0);
  });
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [Theme.light.Background, Theme.dark.Surface],
    ),
  }));
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  );

  return <Animated.View pointerEvents="none" style={[style, containerStyle]} />;
};

export default CustomBackground;
