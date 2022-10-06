import React from 'react';
import {Button} from 'react-native-paper';
import CustomText from '../../components/customText/customText';
import {UseAuth} from '../../context/auth/auth.context';
import Page from '../../layout/page';
import {
  AuthenticatedTypes,
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../typs';
import Signin from './signin/signin.auth';
import {styles} from './styles.auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Linking, Platform, View} from 'react-native';
import MGoogleButton from '../../components/myGoogleButton/MyGoogleButton';
import MyAppleButton from '../../components/myAppleButton/MyAppleButton';
import MySvg from './mySvg';
import {UseI18nContext} from '../../context/I18n/i18n.context';
import {PrivacyURL, TermsURL} from '../../../config/config';
import {useHeaderHeight} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UseThemeContext} from '../../context/theme/themeToggle.context';

const Auth = () => {
  const {authLoading} = UseAuth() as AuthenticatedTypes;
  const {Locals} = UseI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {Colors} = UseThemeContext() as ThemeContextType;

  return (
    <Page paddingHorizontal={5}>
      <View style={{height: useHeaderHeight()}} />
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <MySvg />
        <Signin />

        <Button
          style={styles.Buttons}
          mode="text"
          color={Colors.Primary}
          onPress={() => navigate('Signup')}>
          {Locals.NavigationButton.Signup}
        </Button>

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

        <View style={styles.agree}>
          <CustomText
            text={
              Platform.OS === 'ios'
                ? Locals.Signup.agreesocial
                : Locals.Signup.agreeGoole
            }
            fontWeight="normal"
            Color={'OnBackground'}
            style={styles.agreeText}
          />
          <Button
            mode="text"
            onPress={() => Linking.openURL(TermsURL)}
            disabled={authLoading}>
            {Locals.Signup.terms}
          </Button>
          <CustomText
            text={Locals.Signup.and}
            fontWeight="normal"
            Color={'OnBackground'}
          />
          <Button
            mode="text"
            onPress={() => Linking.openURL(PrivacyURL)}
            disabled={authLoading}>
            {Locals.Signup.privacy}
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default Auth;
