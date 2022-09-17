import React from 'react';
import {Button} from 'react-native-paper';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {
  AuthenticatedTypes,
  I18nContextType,
  ThemeContextType,
} from '../../typs';
import {useI18nContext} from '../../context/I18n/i18n.context';
import {useAuth} from '../../context/auth/auth.context';
import NavigationButton from '../NavigationButton/navigationButton';
import {Alert} from 'react-native';
import {styles} from './styles.signOutButton';

const SignOutButton: React.FC = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {SignOut, isAuthenticated, authLoading} =
    useAuth() as AuthenticatedTypes;

  if (!isAuthenticated) {
    return (
      <NavigationButton
        to="AuthStack"
        Color="Secondary"
        style={styles.button}
      />
    );
  }

  const showConfirmDialog = () => {
    return Alert.alert(
      Locals.SignOutButton.dialog,
      Locals.SignOutButton.dialogmsg,
      [
        // The "Yes" button
        {
          text: Locals.Settings.yes,
          onPress: () => {
            SignOut();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: Locals.Settings.no,
        },
      ],
    );
  };

  return (
    <Button
      onPress={() => showConfirmDialog()}
      mode="contained"
      style={styles.button}
      loading={authLoading}
      disabled={authLoading}
      color={Colors.Secondary}>
      {Locals.SignOutButton.Title}
    </Button>
  );
};

export default SignOutButton;
