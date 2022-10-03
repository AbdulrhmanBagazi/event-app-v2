import React from 'react';
import {I18nContextType, ThemeContextType} from '../../typs';
import {View} from 'react-native';
import {styles} from './styles.language';
import {Button} from 'react-native-paper';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import Page from '../../layout/page';
import {useHeaderHeight} from '@react-navigation/elements';
import MySvg from '../auth/mySvg';
import {UseI18nContext} from '../../context/I18n/i18n.context';

const Language = () => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {ToggleI18n} = UseI18nContext() as I18nContextType;

  return (
    <Page paddingHorizontal={20}>
      <View style={{height: useHeaderHeight()}} />
      <View
        style={[{backgroundColor: Colors.Background}, styles.loadingContainer]}>
        <MySvg />
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => ToggleI18n('ar', true)}>
          عربي
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => ToggleI18n('en', true)}>
          English
        </Button>
      </View>
    </Page>
  );
};

export default Language;
