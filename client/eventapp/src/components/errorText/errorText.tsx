import React from 'react';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {styles} from './styles.errorText';
import {StyleProp, View, ViewStyle} from 'react-native';
import CustomText from '../customText/customText';

const ErrorText: React.FC<{
  text: String;
  style?: StyleProp<ViewStyle>;
}> = ({text, style}) => {
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <View style={[{backgroundColor: Colors.Error}, style, styles.errorView]}>
      <CustomText text={text} fontWeight="normal" Color="onError" />
    </View>
  );
};

export default ErrorText;
