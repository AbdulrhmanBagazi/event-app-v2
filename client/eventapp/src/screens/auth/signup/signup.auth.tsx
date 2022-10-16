import React, {useEffect} from 'react';
import Page from '../../../layout/page';
import {AuthenticatedTypes, RootStackParamList} from '../../../typs';
import {UseAuth} from '../../../context/auth/auth.context';
import SignupForm from './components/signupForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles.signup';
import MySvg from '../mySvg';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

const Signup = () => {
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

  return (
    <Page paddingHorizontal={5}>
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={{height: useHeaderHeight()}} />
        <MySvg />
        <SignupForm />
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default Signup;
