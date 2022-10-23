import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {Image, ImageBackground, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {styles} from './styles.header.singleEvent';
import Animated from 'react-native-reanimated';
import {Applicants} from '../../../../../graphql/generated';
import {UseThemeContext} from '../../../../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../../../../typs';
import Logo from '../../logo';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../../../../layout/screenDimensions';

const HeaderSingleEvent: React.FC<{data: Applicants; style: any}> = ({
  data,
  style,
}) => {
  const {Colors, isDarkMode} = UseThemeContext() as ThemeContextType;
  const getHeaderHeight = useHeaderHeight();

  return (
    <ImageBackground
      source={{uri: data.event.image_url}}
      style={[
        styles.Image,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: isDarkMode
            ? 'rgba(232,149,159,0.5)'
            : 'rgba(175,0,41, 0.5)',
          height: SCREEN_HEIGHT / 2,
        },
      ]}
      resizeMode="cover"
      blurRadius={3}>
      <Animated.View
        style={[
          styles.HeaderSpace,
          style,
          {
            height: getHeaderHeight,
            width: SCREEN_WIDTH,
          },
        ]}
      />
      <View style={styles.Row}>
        <View style={styles.RowItems} />
        <Avatar.Image
          size={100}
          style={[styles.TopCardAvatart, {backgroundColor: Colors.Background}]}
          source={() =>
            data.company?.logo_url ? (
              <Image
                source={{
                  uri: data.company?.logo_url,
                }}
                resizeMode="contain"
                style={styles.CompanyLogo}
              />
            ) : (
              <Logo width={80} height={90} />
            )
          }
        />
        <View style={styles.RowItems} />
      </View>
    </ImageBackground>
  );
};

export default HeaderSingleEvent;
