import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles.layout';
import {UseThemeContext} from '../context/theme/themeToggle.context';
import {ThemeContextType} from '../typs';
import LoadingLayer from './loadingLayer';
import AnimatedView from './animatedView';

const Page: React.FC<{
  children: React.ReactNode;
  paddingHorizontal: number;
  loadingLayer?: boolean;
}> = ({children, paddingHorizontal, loadingLayer}) => {
  const {isDarkMode, Colors} = UseThemeContext() as ThemeContextType;

  return (
    <View style={styles.pageContainer}>
      {loadingLayer ? null : <LoadingLayer />}
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
