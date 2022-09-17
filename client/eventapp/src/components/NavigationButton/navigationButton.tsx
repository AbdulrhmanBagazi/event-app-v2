import React from 'react';
import {Button} from 'react-native-paper';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import * as RootNavigation from '../../App.RootNavigation';
import {I18nContextType, ThemeContextType} from '../../typs';
import {useI18nContext} from '../../context/I18n/i18n.context';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type Routes = 'AuthStack' | 'Signin' | 'Signup' | 'Events';

type ColorType = 'Primary' | 'OnSurface' | 'Secondary';
type ButtonMode = 'contained' | 'outlined' | 'text';

const NavigationButton: React.FC<{
  to: Routes;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  Color: ColorType;
  Mode?: ButtonMode;
  disabled?: boolean;
}> = ({to, style, Color, Mode, disabled, labelStyle}) => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;

  return (
    <Button
      onPress={() => RootNavigation.navigate(to)}
      mode={Mode ? Mode : 'contained'}
      color={Colors[Color]}
      style={[style]}
      labelStyle={[labelStyle]}
      disabled={disabled}>
      {Locals.NavigationButton[to]}
    </Button>
  );
};

export default NavigationButton;
