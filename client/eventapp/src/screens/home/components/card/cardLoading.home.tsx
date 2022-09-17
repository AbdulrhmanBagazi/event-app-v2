import * as React from 'react';
import {styles} from './styles.card.home';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../../../typs';

const CardLoading: React.FC<{}> = () => {
  const {isDarkMode, Colors} = useThemeContext() as ThemeContextType;

  return (
    <>
      {isDarkMode ? (
        <View style={styles.cardContainer}>
          <SkeletonPlaceholder
            backgroundColor={Colors.Surface}
            highlightColor={Colors.Background}>
            <View style={styles.cardImage} />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            backgroundColor={Colors.Surface}
            highlightColor={Colors.Background}>
            <View style={styles.cardTextContainer}>
              <View>
                <View style={styles.cardTextTitle} />
                <View style={styles.cardTextSub} />
              </View>
            </View>
          </SkeletonPlaceholder>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <SkeletonPlaceholder>
            <View style={styles.cardImage} />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
            <View style={styles.cardTextContainer}>
              <View>
                <View style={styles.cardTextTitle} />
                <View style={styles.cardTextSub} />
              </View>
            </View>
          </SkeletonPlaceholder>
        </View>
      )}
    </>
  );
};

export default CardLoading;
