import React, {useEffect} from 'react';
import {AuthenticatedTypes, RootStackParamList} from '../../../typs';
import {useAuth} from '../../../context/auth/auth.context';
import SigninForm from './components/signinForm';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Signin = () => {
  const {isAuthenticated} = useAuth() as AuthenticatedTypes;
  const {reset} = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (isAuthenticated) {
      return reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  }, [isAuthenticated, reset]);

  return <SigninForm />;
};

export default Signin;
