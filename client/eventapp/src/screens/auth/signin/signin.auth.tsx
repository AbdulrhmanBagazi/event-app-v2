import React, {useEffect} from 'react';
import {AuthenticatedTypes, RootStackParamList} from '../../../typs';
import {UseAuth} from '../../../context/auth/auth.context';
import SigninForm from './components/signinForm';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Signin = () => {
  const {isAuthenticated} = UseAuth() as AuthenticatedTypes;
  const {reset} = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (isAuthenticated) {
      return reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    }
  }, [isAuthenticated, reset]);

  return <SigninForm />;
};

export default Signin;
