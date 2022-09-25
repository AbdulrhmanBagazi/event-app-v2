import React from 'react';
import {StyleSheet, PixelRatio, View} from 'react-native';
import {
  CountryCode,
  ThemeContextType,
  TranslationLanguageCode,
} from '../../../../../typs';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {useThemeContext} from '../../../../../context/theme/themeToggle.context';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 17,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    fontSize: 10,
    textAlign: 'center',
    color: '#888',
    marginBottom: 0,
  },
  data: {
    maxWidth: 250,
    padding: 10,
    marginTop: 7,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777',
  },
});

const ModalCountry: React.FC<{
  onSelect: (params: any) => void;
  onClose: () => void;
  open: boolean;
  countryCode: CountryCode;
  Lang: TranslationLanguageCode;
}> = ({open, countryCode, onSelect, onClose, Lang}) => {
  const {Colors, isDarkMode} = useThemeContext() as ThemeContextType;

  const DarkMode = {
    ...DARK_THEME,
    backgroundColor: Colors.Background,
  };

  return (
    <View style={[styles.container, {backgroundColor: Colors.Background}]}>
      <CountryPicker
        theme={isDarkMode ? DarkMode : {}}
        countryCode={countryCode}
        withFlag
        visible={open}
        withFlagButton={false}
        onSelect={e => onSelect(e)}
        onClose={() => onClose()}
        translation={Lang}
        preferredCountries={[
          'SA',
          'AE',
          'KW',
          'BH',
          'OM',
          'QA',
          'EG',
          'YE',
          'JO',
          'SD',
          'TW',
        ]}
      />
    </View>
  );
};

//change nodemodule CountryList / CountryPicker

export default ModalCountry;
