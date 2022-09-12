import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles.layout';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {ThemeContextType} from '../typs';
// import {SafeAreaView} from 'react-native-safe-area-context';

type PaddingHorizontalType = 5 | 0;

const Page: React.FC<{
  children: React.ReactNode;
  paddingHorizontal: PaddingHorizontalType;
}> = ({children, paddingHorizontal}) => {
  const {isDarkMode, Colors} = useThemeContext() as ThemeContextType;

  return (
    <View
      style={[styles.pageContainer, {paddingHorizontal: paddingHorizontal}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.Background}
        animated
      />
      {children}
    </View>
  );
};

export default Page;
