import React, {createContext, useContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeContextType} from '../../typs';
import {myTheme} from './theme';
import {MMKVLoader} from 'react-native-mmkv-storage';
import RNBootSplash from 'react-native-bootsplash';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const DarkMode = useColorScheme() === 'dark';
  const [isdark, setDark] = useState(DarkMode);
  const MMKV = new MMKVLoader().initialize();

  const ToggleTheme = async () => {
    if (isdark) {
      setDark(false);
      await MMKV.setStringAsync('darkMode', 'false');
      return;
    }
    setDark(true);
    await MMKV.setStringAsync('darkMode', 'true');
    return;
  };

  useEffect(() => {
    const getDark = async () => {
      const DarkMMKV = await MMKV.getStringAsync('darkMode');
      if (DarkMMKV) {
        if (DarkMMKV === 'false') {
          setDark(false);

          return RNBootSplash.hide({fade: true});
        } else if (DarkMMKV === 'true') {
          setDark(true);

          return RNBootSplash.hide({fade: true});
        }
      } else {
        setDark(DarkMode);

        return RNBootSplash.hide({fade: true});
      }
    };

    getDark();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        ToggleTheme,
        isDarkMode: isdark,
        Colors: isdark ? myTheme.dark : myTheme.light,
        Theme: myTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseThemeContext = () => useContext(ThemeContext);
