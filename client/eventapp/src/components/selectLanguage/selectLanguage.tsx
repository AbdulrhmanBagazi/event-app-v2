import React from 'react';
import {styles} from './styles.selectLanguage';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {I18nContextType, ThemeContextType} from '../../typs';
import {View} from 'react-native';
import CustomText from '../customText/customText';
import {Checkbox} from 'react-native-paper';
import {UseI18nContext} from '../../context/I18n/i18n.context';

const SelectLanguage: React.FC = () => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {ToggleI18n, Lang} = UseI18nContext() as I18nContextType;

  return (
    <View style={styles.container}>
      <View style={styles.selectLanguageContainer}>
        <CustomText text="English" fontWeight="normal" Color="OnSurface" />
        <Checkbox
          status={Lang === 'en' ? 'checked' : 'unchecked'}
          uncheckedColor="gray"
          color={Colors.Secondary}
          onPress={() => ToggleI18n('en', false)}
        />
      </View>

      <View style={styles.selectLanguageContainer}>
        <CustomText text="عربي" fontWeight="normal" Color="OnSurface" />
        <Checkbox
          status={Lang === 'ar' ? 'checked' : 'unchecked'}
          uncheckedColor="gray"
          color={Colors.Secondary}
          onPress={() => ToggleI18n('ar', false)}
        />
      </View>
    </View>
  );
};

export default SelectLanguage;
