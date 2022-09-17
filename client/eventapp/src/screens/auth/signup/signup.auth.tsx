import React, {useEffect} from 'react';
import Page from '../../../layout/page';
import {AuthenticatedTypes, ScreenType} from '../../../typs';
import {useAuth} from '../../../context/auth/auth.context';
import SignupForm from './components/signupForm';
import CustomHeaderBackButton from '../../../components/customHeaderBackButton/customHeaderBackButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles.signup';
import MySvg from '../mySvg';

const Signup = ({i18n, navigation}: ScreenType) => {
  const {authLoading, isAuthenticated} = useAuth() as AuthenticatedTypes;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CustomHeaderBackButton
          disabled={authLoading}
          onPress={() => navigation.pop()}
        />
      ),
    });
  }, [navigation, authLoading]);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('TabStack');
    }
  }, [isAuthenticated, navigation]);

  return (
    <Page paddingHorizontal={5}>
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled">
        <MySvg />
        <SignupForm i18n={i18n} />
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default Signup;
