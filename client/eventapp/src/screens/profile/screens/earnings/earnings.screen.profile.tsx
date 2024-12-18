import {useHeaderHeight} from '@react-navigation/elements';
import React from 'react';
import {Image, View} from 'react-native';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import Page from '../../../../layout/page';
import {ThemeContextType} from '../../../../typs';
import {styles} from './styles.earnings';

const Earnings = () => {
  const {isDarkMode} = UseThemeContext() as ThemeContextType;

  return (
    <Page paddingHorizontal={20}>
      <View style={{height: useHeaderHeight()}} />
      <View style={styles.Logo}>
        <Image
          style={styles.tinyLogo}
          source={
            isDarkMode
              ? require('../../../../assets/earingdark.png')
              : require('../../../../assets/earinglight.png')
          }
        />
      </View>
    </Page>
  );
};

export default Earnings;
