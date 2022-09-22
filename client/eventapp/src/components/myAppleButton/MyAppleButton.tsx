/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {
  AuthenticatedTypes,
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
} from '../../typs';
import {styles} from './styles.MyAppleButton';
import {Button, Text} from 'react-native-paper';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {useAuth} from '../../context/auth/auth.context';
import {useError} from '../../context/error/error.context';
import {useI18nContext} from '../../context/I18n/i18n.context';

const MyAppleButton: React.FC<{text: String}> = ({text}) => {
  const {isDarkMode} = useThemeContext() as ThemeContextType;
  const {authLoading, AppleSignIn} = useAuth() as AuthenticatedTypes;
  const {ThrowError} = useError() as ErrorContextType;
  const {Locals} = useI18nContext() as I18nContextType;

  async function onAppleButtonPress() {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL],
      });

      const {
        user: newUser,
        email,
        nonce,
        identityToken,
        realUserStatus /* etc */,
      } = appleAuthRequestResponse;

      if (identityToken) {
        return AppleSignIn({
          user: newUser,
          email,
          nonce,
          identityToken,
          realUserStatus /* etc */,
        });
      } else {
        ThrowError(Locals.Errors.unknown);
      }
    } catch (error: any) {
      if (error.code === appleAuth.Error.CANCELED) {
        return;
      } else {
        return;
      }
    }
  }

  return (
    <Button
      onPress={() => onAppleButtonPress()}
      style={styles.customButton}
      contentStyle={styles.customButtonContainer}
      color={isDarkMode ? '#fff' : '#000'}
      //   color="#FFFFFF"
      labelStyle={styles.icon}
      mode="contained"
      uppercase={false}
      disabled={authLoading}
      icon={'apple'}>
      <Text style={[styles.label, {color: isDarkMode ? 'black' : 'white'}]}>
        {text}
      </Text>
    </Button>
  );
};

export default MyAppleButton;
