import React, {useEffect} from 'react';
import {AuthenticatedTypes, ScreenType, ThemeContextType} from '../../typs';
import {StatusBar, View} from 'react-native';
import {styles} from './styles.loading';
import {ActivityIndicator} from 'react-native-paper';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {useAuth} from '../../context/auth/auth.context';

const Loading = ({navigation}: ScreenType) => {
  const {isDarkMode, Colors} = useThemeContext() as ThemeContextType;
  const {authLoading} = useAuth() as AuthenticatedTypes;

  useEffect(() => {
    if (!authLoading) {
      setTimeout(() => {
        navigation.replace('TabStack');
      }, 1000);
    }
  }, [authLoading, navigation]);
  return (
    <View
      style={[{backgroundColor: Colors.Background}, styles.loadingContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.Background}
        animated
      />

      <ActivityIndicator animating={true} color={Colors.Primary} />
    </View>
  );
};

export default Loading;
