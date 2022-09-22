import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {Linking, View} from 'react-native';
import {List} from 'react-native-paper';
import {AppURL, PrivacyURL, TermsURL} from '../../../../../config/config';
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
import Share from 'react-native-share';

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
      <AnimatedView Color={'Surface'} style={styles.Container}>
        <List.Item
          title={Locals.Profile.Profile}
          titleStyle={{
            color: !isAuthenticated ? Colors.disabled : Colors.OnBackground,
          }}
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
              color={!isAuthenticated ? '#dddddd' : Colors.Secondary}
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
          titleStyle={{
            color: !isAuthenticated ? Colors.disabled : Colors.OnBackground,
          }}
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
              color={!isAuthenticated ? Colors.disabled : Colors.Secondary}
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
            titleStyle={{
              color: !isAuthenticated ? Colors.disabled : Colors.OnBackground,
            }}
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
                color={!isAuthenticated ? Colors.disabled : Colors.Secondary}
              />
            )}
            disabled={!isAuthenticated}
            onPress={() => console.log(1)}
          />
        ) : null}
      </AnimatedView>

      <View style={styles.Divider} />

      <AnimatedView Color={'Surface'} style={styles.Container}>
        <List.Item
          title={Locals.Profile.terms}
          style={[
            {
              borderBottomColor: isDarkMode
                ? Colors.Background
                : Theme.dark.Surface,
            },
          ]}
          left={props => (
            <List.Icon {...props} icon="web" color={Colors.Primary} />
          )}
          onPress={() => Linking.openURL(TermsURL)}
        />
        <List.Item
          title={Locals.Profile.privacy}
          style={[
            {
              borderBottomColor: isDarkMode
                ? Colors.Background
                : Theme.dark.Surface,
            },
          ]}
          left={props => (
            <List.Icon {...props} icon="web" color={Colors.Primary} />
          )}
          onPress={() => Linking.openURL(PrivacyURL)}
        />
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
          onPress={() =>
            Share.open({url: AppURL})
              .then(_res => {
                return;
              })
              .catch(_err => {
                return;
              })
          }
        />
        <SignOutButton />
      </AnimatedView>
    </View>
  );
};

export default ProfileList;
