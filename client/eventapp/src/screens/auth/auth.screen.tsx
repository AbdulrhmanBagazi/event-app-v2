import React from 'react';
import {IconButton} from 'react-native-paper';
import CustomText from '../../components/customText/customText';
import NavigationButton from '../../components/NavigationButton/navigationButton';
import {useAuth} from '../../context/auth/auth.context';
import Page from '../../layout/page';
import {
  AuthenticatedTypes,
  I18nContextType,
  RootStackParamList,
} from '../../typs';
import Signin from './signin/signin.auth';
import {styles} from './styles.auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Platform, View} from 'react-native';
import MGoogleButton from '../../components/myGoogleButton/MyGoogleButton';
import MyAppleButton from '../../components/myAppleButton/MyAppleButton';
import MySvg from './mySvg';
import {useI18nContext} from '../../context/I18n/i18n.context';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const Auth = () => {
  const {authLoading} = useAuth() as AuthenticatedTypes;
  const {Locals} = useI18nContext() as I18nContextType;
  const {pop, setOptions} =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  React.useLayoutEffect(() => {
    setOptions({
      headerLeft: () => (
        <IconButton
          disabled={authLoading}
          icon="close"
          size={24}
          onPress={() => pop()}
        />
      ),
    });
  }, [authLoading, setOptions, pop]);

  return (
    <Page paddingHorizontal={5}>
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled">
        <MySvg />
        <Signin />
        <NavigationButton
          disabled={authLoading}
          style={[styles.Buttons]}
          to="Signup"
          Color="Primary"
          Mode="text"
        />

        <View style={styles.ConnectView}>
          <View style={styles.Divider} />
          <CustomText
            text={Locals.Auth.Connect}
            fontWeight="bold"
            Color={'OnBackground'}
          />
          <View style={styles.Divider} />
        </View>

        <MGoogleButton text={Locals.Auth.Google} />

        {Platform.OS === 'ios' ? (
          <MyAppleButton text={Locals.Auth.Apple} />
        ) : null}
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default Auth;
