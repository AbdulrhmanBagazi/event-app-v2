import React from 'react';
import {ActivityIndicator, Switch, View} from 'react-native';
import CustomText from '../customText/customText';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {styles} from './styles.customSwitch';

const CustomSwitch: React.FC<{
  value: boolean;
  onPress: () => void;
  text: string;
  Loading?: boolean;
}> = ({value, onPress, text, Loading}) => {
  const {Colors} = useThemeContext() as ThemeContextType;
  return (
    <View style={styles.switchContainer}>
      <CustomText text={text} fontWeight="normal" Color="OnSurface" />
      {Loading ? (
        <ActivityIndicator
          animating={true}
          color={Colors.Secondary}
          style={styles.ActivityIndicator}
        />
      ) : (
        <Switch
          value={value}
          onValueChange={onPress}
          trackColor={{
            true: Colors.Secondary,
          }}
        />
      )}
    </View>
  );
};

export default CustomSwitch;
