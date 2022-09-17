import React from 'react';
import {styles} from './styles.selectLanguage';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {I18nContextType, ThemeContextType} from '../../typs';
import {View} from 'react-native';
import CustomText from '../customText/customText';
import {Checkbox} from 'react-native-paper';
import {useI18nContext} from '../../context/I18n/i18n.context';

const SelectLanguage: React.FC = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {ToggleI18n, Lang} = useI18nContext() as I18nContextType;

  return (
    <View style={styles.container}>
      <View style={styles.selectLanguageContainer}>
        <CustomText text="English" fontWeight="normal" Color="OnSurface" />
        <Checkbox
          status={Lang === 'en' ? 'checked' : 'unchecked'}
          uncheckedColor="gray"
          color={Colors.Secondary}
          onPress={() => ToggleI18n('en')}
        />
      </View>

      <View style={styles.selectLanguageContainer}>
        <CustomText text="عربي" fontWeight="normal" Color="OnSurface" />
        <Checkbox
          status={Lang === 'ar' ? 'checked' : 'unchecked'}
          uncheckedColor="gray"
          color={Colors.Secondary}
          onPress={() => ToggleI18n('ar')}
        />
      </View>
    </View>
  );
};

export default SelectLanguage;
