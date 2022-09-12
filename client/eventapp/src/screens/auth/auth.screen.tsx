import React from 'react';
import {IconButton} from 'react-native-paper';
import CustomText from '../../components/customText/customText';
import NavigationButton from '../../components/NavigationButton/navigationButton';
import {useAuth} from '../../context/auth/auth.context';
import Page from '../../layout/page';
import {AuthenticatedTypes, ScreenType, ThemeContextType} from '../../typs';
// import SvgComponent from './mySvg';
import Signin from './signin/signin.auth';
import {styles} from './styles.auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Platform, View} from 'react-native';
import MGoogleButton from '../../components/myGoogleButton/MyGoogleButton';
import MyAppleButton from '../../components/myAppleButton/MyAppleButton';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import MySvg from './mySvg';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Auth = ({i18n, navigation}: ScreenType) => {
  const {authLoading} = useAuth() as AuthenticatedTypes;
  const {Colors} = useThemeContext() as ThemeContextType;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          disabled={authLoading}
          icon="close"
          size={24}
          onPress={() => navigation.pop()}
        />
      ),
    });
  }, [navigation, authLoading]);

  return (
    <Page paddingHorizontal={5}>
      {/* <SvgComponent /> */}
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled">
        <MySvg />
        {/* <CustomText
          text={i18n.Auth.Welcome}
          fontWeight="900"
          Color="OnBackground"
          style={styles.title}
        /> */}
        <Signin i18n={i18n} navigation={navigation} />
        <NavigationButton
          disabled={authLoading}
          style={[styles.Buttons]}
          labelStyle={[{color: Colors.OnSecondary}]}
          to="Signup"
          Color="Secondary"
          Mode="contained"
        />

        <View style={styles.ConnectView}>
          <View style={styles.Divider} />
          <CustomText
            text={i18n.Auth.Connect}
            fontWeight="bold"
            Color={'OnBackground'}
          />
          <View style={styles.Divider} />
        </View>

        <MGoogleButton text={i18n.Auth.Google} />

        {Platform.OS === 'ios' ? (
          <MyAppleButton text={i18n.Auth.Apple} />
        ) : null}

        {/* <Button
          icon={() => <Icon name="google" size={20} color="#FFFFFF" />}
          color="#4285F4"
          mode="contained"
          style={styles.SocialButtons}
          uppercase={false}>
          <CustomText
            text="Sign in with Google"
            fontWeight="600"
            Color="OnPrimary"
          />
        </Button>
        <Button
          icon={() => <Icon name="apple" size={20} />}
          color="#FFFFFF"
          mode="contained"
          style={styles.SocialButtons}
          uppercase={false}>
          <CustomText
            text="Sign in with Apple"
            fontWeight="600"
            Color="OnSecondary"
          />
        </Button> */}
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default Auth;
