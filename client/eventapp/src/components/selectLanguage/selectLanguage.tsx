import React from 'react';
import {styles} from './styles.selectLanguage';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {I18nContextType, Languges, ThemeContextType} from '../../typs';
import {Alert, View} from 'react-native';
import CustomText from '../customText/customText';
import {Checkbox} from 'react-native-paper';
import {useI18nContext} from '../../context/I18n/i18n.context';

const SelectLanguage: React.FC = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {ToggleI18n, Lang, Locals} = useI18nContext() as I18nContextType;

  const ChangeLan = async (to: Languges) => {
    return Alert.alert(Locals.Settings.LanguageChange, '', [
      // The "Yes" button
      {
        text: Locals.Settings.ok,
        onPress: () => {
          ToggleI18n(to);
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: Locals.Settings.cancel,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectLanguageContainer}>
        <CustomText text="English" fontWeight="normal" Color="OnSurface" />
        <Checkbox
          status={Lang === 'en' ? 'checked' : 'unchecked'}
          uncheckedColor="gray"
          color={Colors.Secondary}
          onPress={() => ChangeLan('en')}
        />
      </View>

      <View style={styles.selectLanguageContainer}>
        <CustomText text="عربي" fontWeight="normal" Color="OnSurface" />
        <Checkbox
          status={Lang === 'ar' ? 'checked' : 'unchecked'}
          uncheckedColor="gray"
          color={Colors.Secondary}
          onPress={() => ChangeLan('ar')}
        />
      </View>
    </View>
  );
};

export default SelectLanguage;
