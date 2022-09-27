import * as React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {ThemeContextType} from '../typs';
import {styles} from './styles.layout';

const Loading = () => {
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <View style={styles.loadingView}>
      <ActivityIndicator animating={true} color={Colors.Primary} />
    </View>
  );
};

export default Loading;
