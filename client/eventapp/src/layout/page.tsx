import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles.layout';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {ThemeContextType} from '../typs';
import LoadingLayer from './loadingLayer';
import AnimatedView from './animatedView';
// import {SafeAreaView} from 'react-native-safe-area-context';

const Page: React.FC<{
  children: React.ReactNode;
  paddingHorizontal: number;
}> = ({children, paddingHorizontal}) => {
  const {isDarkMode, Colors} = useThemeContext() as ThemeContextType;

  return (
    <View style={styles.pageContainer}>
      <LoadingLayer />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.Background}
        animated
      />
      <AnimatedView
        style={[
          styles.layoutContainer,
          {
            paddingHorizontal: paddingHorizontal,
          },
        ]}
        Color="Background">
        {children}
      </AnimatedView>
    </View>
  );
};

export default Page;
