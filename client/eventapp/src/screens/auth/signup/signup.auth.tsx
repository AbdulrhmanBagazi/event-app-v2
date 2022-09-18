import React, {useEffect} from 'react';
import Page from '../../../layout/page';
import {AuthenticatedTypes, RootStackParamList} from '../../../typs';
import {useAuth} from '../../../context/auth/auth.context';
import SignupForm from './components/signupForm';
import CustomHeaderBackButton from '../../../components/customHeaderBackButton/customHeaderBackButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles.signup';
import MySvg from '../mySvg';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Signup = () => {
  const {authLoading, isAuthenticated} = useAuth() as AuthenticatedTypes;
  const {setOptions, navigate, pop} =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  React.useLayoutEffect(() => {
    return setOptions({
      headerLeft: () => (
        <CustomHeaderBackButton disabled={authLoading} onPress={() => pop()} />
      ),
    });
  }, [setOptions, authLoading, pop]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('Home', {});
    }
  }, [isAuthenticated, navigate]);

  return (
    <Page paddingHorizontal={5}>
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled">
        <MySvg />
        <SignupForm />
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default Signup;
