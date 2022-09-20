import * as React from 'react';
import {Banner} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import AnimatedView from '../../../../layout/animatedView';
import {
  AuthenticatedTypes,
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../../../typs';
import {StyleSheet} from 'react-native';
import {useAuth} from '../../../../context/auth/auth.context';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const UpdateProfileBanner = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {isAuthenticated, user} = useAuth() as AuthenticatedTypes;
  const [visible, setVisible] = React.useState(user?.Profile ? false : true);
  const {Locals} = useI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    if (user?.Profile) {
      setVisible(false);
    }
  }, [user]);

  return (
    <AnimatedView Color="Surface" style={styles.View}>
      <Banner
        visible={!isAuthenticated ? false : visible}
        style={styles.banner}
        actions={[
          {
            label: Locals.UserProfile.update,
            onPress: () => {
              navigate('Account', {
                screen: 'UserProfile',
              });
            },
            color: Colors.Secondary,
          },
          {
            label: Locals.UserProfile.later,
            onPress: () => setVisible(false),
            color: Colors.Secondary,
          },
        ]}
        icon={({size}) => (
          <Icon name="account-alert" size={size} color={Colors.Primary} />
        )}>
        {Locals.UserProfile.profilemsg}
      </Banner>
    </AnimatedView>
  );
};

export default UpdateProfileBanner;

export const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  View: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
});
