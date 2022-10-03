import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {Linking, View} from 'react-native';
import {Badge, List} from 'react-native-paper';
import {AppURL, PrivacyURL, TermsURL} from '../../../../../config/config';
import CustomText from '../../../../components/customText/customText';
import SignOutButton from '../../../../components/signOutButton/signOutButton';
import {UseAuth} from '../../../../context/auth/auth.context';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import AnimatedView from '../../../../layout/animatedView';
import {
  AuthenticatedTypes,
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../../../typs';
import {styles} from './styles.profileList';
import Share from 'react-native-share';
import RNBottomSheet from '@gorhom/bottom-sheet';

const ProfileList: React.FC<{
  onPress: () => void;
}> = ({onPress}) => {
  const refBottomSheetPassword = React.useRef<RNBottomSheet>(null);
  const {isDarkMode, Colors} = UseThemeContext() as ThemeContextType;
  const {isAuthenticated, user} = UseAuth() as AuthenticatedTypes;
  const {Locals} = UseI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        // Useful for cleanup functions

        refBottomSheetPassword.current?.close();
      };
    }, []),
  );

  return (
    <View style={styles.transparent}>
      <CustomText
        numberOfLines={2}
        text={`${
          isAuthenticated ? Locals.Profile.Welcome : Locals.Profile.SignInfirst
        }`}
        fontWeight="bold"
        Color="OnBackground"
        style={styles.title}
      />

      {user?.Profile ? (
        <CustomText
          numberOfLines={2}
          text={`${user?.Profile?.firstName + ' ' + user?.Profile?.lastName}`}
          fontWeight="normal"
          Color="OnBackground"
          style={styles.name}
        />
      ) : null}
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
                : Colors.disabled,
            },
          ]}
          left={props => (
            <List.Icon
              {...props}
              icon="account"
              color={!isAuthenticated ? Colors.disabled : Colors.Secondary}
            />
          )}
          disabled={!isAuthenticated}
          onPress={() => navigate('UserProfile')}
        />
        <List.Item
          title={Locals.Profile.contactInfo}
          titleStyle={{
            color:
              isAuthenticated && user?.Profile !== null
                ? Colors.OnBackground
                : Colors.disabled,
          }}
          // description="Item description"
          style={[
            {
              borderBottomColor: isDarkMode
                ? Colors.Background
                : Colors.disabled,
            },
          ]}
          left={props => (
            <List.Icon
              {...props}
              icon="phone"
              color={
                isAuthenticated && user?.Profile !== null
                  ? Colors.Secondary
                  : Colors.disabled
              }
            />
          )}
          disabled={isAuthenticated && user?.Profile !== null ? false : true}
          onPress={() => navigate('Contact')}
          right={() =>
            user?.Profile === null && isAuthenticated ? (
              <Badge
                style={[
                  styles.Badge,
                  {
                    backgroundColor: Colors.Error,
                    color: Colors.onError,
                  },
                ]}>
                {Locals.Profile.addProfileFirst}
              </Badge>
            ) : null
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
                : Colors.disabled,
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
          onPress={() => navigate('Earnings')}
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
                  : Colors.disabled,
              },
            ]}
            left={props => (
              <List.Icon
                {...props}
                icon="key"
                color={!isAuthenticated ? Colors.disabled : Colors.Secondary}
              />
            )}
            disabled={!isAuthenticated}
            onPress={() => navigate('ChangePassword')}
          />
        ) : null}
      </AnimatedView>

      <View style={styles.Divider} />

      <AnimatedView Color={'Surface'} style={styles.Container}>
        <List.Item
          title={Locals.Profile.appsettings}
          style={[
            {
              borderBottomColor: isDarkMode
                ? Colors.Background
                : Colors.Surface,
            },
          ]}
          left={props => (
            <List.Icon {...props} icon="cog" color={Colors.Primary} />
          )}
          onPress={onPress}
        />
        <List.Item
          title={Locals.Profile.terms}
          style={[
            {
              borderBottomColor: isDarkMode
                ? Colors.Background
                : Colors.Surface,
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
                : Colors.Surface,
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
                : Colors.Surface,
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
