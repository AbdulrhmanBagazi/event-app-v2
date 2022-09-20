import React from 'react';
import {List} from 'react-native-paper';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {
  AuthenticatedTypes,
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../typs';
import {useI18nContext} from '../../context/I18n/i18n.context';
import {useAuth} from '../../context/auth/auth.context';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const SignOutButton: React.FC = () => {
  const {Colors, isDarkMode, Theme} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {SignOut, isAuthenticated, authLoading} =
    useAuth() as AuthenticatedTypes;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  if (!isAuthenticated) {
    return (
      <List.Item
        title={Locals.Profile.SignIn}
        style={[
          {
            borderBottomColor: isDarkMode
              ? Colors.Background
              : Theme.dark.Surface,
          },
        ]}
        left={props => (
          <List.Icon {...props} icon="login" color={Colors.Primary} />
        )}
        onPress={() => navigate('AuthStack', {})}
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
    <List.Item
      title={Locals.Profile.SignOut}
      style={[
        {
          borderBottomColor: isDarkMode
            ? Colors.Background
            : Theme.dark.Surface,
        },
      ]}
      left={props => (
        <List.Icon
          {...props}
          icon="logout"
          color={authLoading ? '#dddddd' : Colors.Primary}
        />
      )}
      disabled={authLoading}
      onPress={() => showConfirmDialog()}
    />
  );
};

export default SignOutButton;
