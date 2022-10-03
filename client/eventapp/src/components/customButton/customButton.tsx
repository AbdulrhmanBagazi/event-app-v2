import React from 'react';
import {Button} from 'react-native-paper';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {styles} from './styles.customButton';

const CustomButton: React.FC<{
  text: String;
  onPress: () => void;
  disabled?: boolean;
}> = ({text, onPress, disabled}) => {
  const {Colors} = UseThemeContext() as ThemeContextType;

  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      style={styles.customButton}
      contentStyle={styles.customButtonContainer}
      mode="contained"
      color={Colors.Primary}>
      {text}
    </Button>
  );
};

export default CustomButton;
