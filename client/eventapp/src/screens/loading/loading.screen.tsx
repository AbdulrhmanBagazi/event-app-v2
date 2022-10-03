import React, {useEffect} from 'react';
import {
  AuthenticatedTypes,
  RootStackParamList,
  ThemeContextType,
} from '../../typs';
import {StatusBar, View} from 'react-native';
import {styles} from './styles.loading';
import {ActivityIndicator} from 'react-native-paper';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {UseAuth} from '../../context/auth/auth.context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MMKVLoader} from 'react-native-mmkv-storage';

const Loading = () => {
  const {isDarkMode, Colors} = UseThemeContext() as ThemeContextType;
  const {authLoading} = UseAuth() as AuthenticatedTypes;
  const MMKV = new MMKVLoader().initialize();
  const {replace} = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const update = async () => {
      const Lang = await MMKV.getStringAsync('Lang');

      if (!Lang) {
        return replace('Language');
      }

      if (!authLoading) {
        setTimeout(() => {
          return replace('Main');
        }, 1000);
      }
    };
    update();
  }, [MMKV, authLoading, replace]);

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
