import React from 'react';
import {IconButton} from 'react-native-paper';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';

const HeaderLeftButtons: React.FC<{
  onPress: () => void;
}> = ({onPress}) => {
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <IconButton onPress={onPress} icon="cog-outline" color={Colors.OnSurface} />
  );
};

export default HeaderLeftButtons;
