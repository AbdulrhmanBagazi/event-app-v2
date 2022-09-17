import React, {useEffect} from 'react';
import {AuthenticatedTypes, ScreenType} from '../../../typs';
import {useAuth} from '../../../context/auth/auth.context';
import SigninForm from './components/signinForm';

const Signin = ({i18n, navigation}: ScreenType) => {
  const {isAuthenticated} = useAuth() as AuthenticatedTypes;

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home');
    }
  }, [isAuthenticated, navigation]);

  return <SigninForm i18n={i18n} />;
};

export default Signin;
