import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import CustomText from '../../../../components/customText/customText';
import SignOutButton from '../../../../components/signOutButton/signOutButton';
import {useAuth} from '../../../../context/auth/auth.context';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import AnimatedView from '../../../../layout/animatedView';
import {
  AuthenticatedTypes,
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../../../typs';
import {styles} from './styles.profileList';

const ProfileList = () => {
  const {isDarkMode, Colors, Theme} = useThemeContext() as ThemeContextType;
  const {isAuthenticated, user} = useAuth() as AuthenticatedTypes;
  const {Locals} = useI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <CustomText
        numberOfLines={1}
        text={`${
          isAuthenticated
            ? user?.Profile
              ? Locals.Profile.Welcome +
                ' ' +
                user?.Profile?.firstName +
                ' ' +
                user?.Profile?.lastName
              : Locals.Profile.Welcome
            : Locals.Profile.SignInfirst
        }`}
        fontWeight="normal"
        Color="OnSurface"
        style={styles.title}
      />
      <AnimatedView Color={'Surface'}>
        <List.Item
          title={Locals.Profile.Profile}
          // description="Item description"
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
              icon="account"
              color={!isAuthenticated ? '#dddddd' : Colors.Primary}
            />
          )}
          disabled={!isAuthenticated}
          onPress={() =>
            navigate('Account', {
              screen: 'UserProfile',
            })
          }
        />
        <List.Item
          title={Locals.Profile.Earnings}
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
              icon="cash"
              color={!isAuthenticated ? '#dddddd' : Colors.Primary}
            />
          )}
          disabled={!isAuthenticated}
          onPress={() =>
            navigate('Account', {
              screen: 'Earnings',
            })
          }
        />

        {user?.Type === 'EMAIL' ? (
          <List.Item
            title={Locals.Profile.UpdatePassword}
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
                icon="lastpass"
                color={!isAuthenticated ? '#dddddd' : Colors.Primary}
              />
            )}
            disabled={!isAuthenticated}
            onPress={() => console.log(1)}
          />
        ) : null}
        <List.Item
          title={Locals.Profile.Share}
          style={[
            {
              borderBottomColor: isDarkMode
                ? Colors.Background
                : Theme.dark.Surface,
            },
          ]}
          left={props => (
            <List.Icon {...props} icon="share" color={Colors.Primary} />
          )}
          onPress={() => console.log(1)}
        />
        <SignOutButton />
      </AnimatedView>
    </View>
  );
};

export default ProfileList;
