import React from 'react';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {ThemeContextType} from '../typs';
import {styles} from './styles.layout';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import AnimatedView from './animatedView';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const {isDarkMode, Theme} = useThemeContext() as ThemeContextType;

  const Dark = {
    ...DarkTheme,
    roundness: 2,
    colors: {
      ...DarkTheme.colors,
      accent: Theme.light.Secondary,
      primary: Theme.dark.Primary,
    },
  };

  const Ligh = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      accent: Theme.dark.Secondary,
      primary: Theme.light.Primary,
    },
  };

  return (
    <PaperProvider theme={isDarkMode ? Dark : Ligh}>
      <AnimatedView style={styles.layoutContainer} Color="Background">
        {children}
      </AnimatedView>
    </PaperProvider>
  );
};

export default Layout;
