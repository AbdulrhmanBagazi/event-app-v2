import * as React from 'react';
import {styles} from './styles.banner.home';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../../../typs';

const BannerLoading: React.FC<{}> = () => {
  const {isDarkMode, Colors} = useThemeContext() as ThemeContextType;

  return (
    <Animated.View entering={FadeInDown.duration(500).delay(200)}>
      {isDarkMode ? (
        <View style={styles.cardContainer}>
          <SkeletonPlaceholder
            backgroundColor={Colors.Surface}
            highlightColor={Colors.Background}>
            <View style={styles.cardImage} />
          </SkeletonPlaceholder>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <SkeletonPlaceholder>
            <View style={styles.cardImage} />
          </SkeletonPlaceholder>
        </View>
      )}
    </Animated.View>
  );
};

export default BannerLoading;
