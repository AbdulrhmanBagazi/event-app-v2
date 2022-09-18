import React, {useEffect} from 'react';
import {
  AuthenticatedTypes,
  RootStackParamList,
  ThemeContextType,
} from '../../typs';
import {StatusBar, View} from 'react-native';
import {styles} from './styles.loading';
import {ActivityIndicator} from 'react-native-paper';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {useAuth} from '../../context/auth/auth.context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Loading = () => {
  const {isDarkMode, Colors} = useThemeContext() as ThemeContextType;
  const {authLoading} = useAuth() as AuthenticatedTypes;
  const {replace} = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!authLoading) {
      setTimeout(() => {
        return replace('Home', {});
      }, 1000);
    }
  }, [authLoading, replace]);

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
