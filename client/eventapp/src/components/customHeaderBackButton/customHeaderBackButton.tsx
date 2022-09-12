import React from 'react';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {HeaderBackButton} from '@react-navigation/elements';

const CustomHeaderBackButton: React.FC<{
  disabled: boolean;
  onPress: () => void;
}> = ({disabled, onPress}) => {
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <HeaderBackButton
      onPress={onPress}
      disabled={disabled}
      tintColor={Colors.OnBackground}
    />
  );
};

export default CustomHeaderBackButton;
