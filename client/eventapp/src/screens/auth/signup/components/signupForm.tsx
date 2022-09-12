import React, {useState} from 'react';
import {
  AuthenticatedTypes,
  ErrorContextType,
  ScreenType,
  ThemeContextType,
} from '../../../../typs';
import {Button, TextInput} from 'react-native-paper';
import {useAuth} from '../../../../context/auth/auth.context';
import {styles} from './styles.signupForm';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {View} from 'react-native';
import {useError} from '../../../../context/error/error.context';

const SignupForm = ({i18n}: ScreenType) => {
  const {authLoading, SignUp} = useAuth() as AuthenticatedTypes;
  const {Colors} = useThemeContext() as ThemeContextType;
  const {ThrowError} = useError() as ErrorContextType;
  const [isEmail, setEmail] = useState('a@a.com');
  const [isPassword, setPassword] = useState('1233');
  const [isError, setError] = useState({
    Email: false,
    Password: false,
  });

  const validateEmail = (email: string) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(email);

    if (reg.test(email)) {
      isError.Email = false;
      return setError({
        ...isError,
      });
    }
    isError.Email = true;
    return setError({
      ...isError,
    });
  };

  const validatePassword = (password: string) => {
    setPassword(password);

    if (password.length >= 2) {
      isError.Password = false;
      return setError({
        ...isError,
      });
    }
    isError.Password = true;
    return setError({
      ...isError,
    });
  };

  const HandleLogin = async (values: {email: string; password: string}) => {
    if (values.email.length <= 0 && values.password.length <= 0) {
      return setError({
        Email: true,
        Password: true,
      });
    }

    const [error] = await SignUp(values);

    if (error?.status === 400) {
      ThrowError(i18n.Errors.EmailUsed);
      isError.Email = true;
      setError({
        ...isError,
      });
    }

    setTimeout(() => {
      setError({
        Email: false,
        Password: false,
      });
    }, 1000);

    // return SignUp(values);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={i18n.Signup.Email}
        value={isEmail}
        onChangeText={val => validateEmail(val)}
        onBlur={() => validateEmail(isEmail)}
        mode="flat"
        error={isError.Email}
        activeUnderlineColor={Colors.Primary}
        editable={!authLoading}
        style={styles.TextInput}
      />

      <TextInput
        label={i18n.Signup.Password}
        value={isPassword}
        onChangeText={val => validatePassword(val)}
        onBlur={() => validatePassword(isPassword)}
        mode="flat"
        error={isError.Password}
        activeUnderlineColor={Colors.Primary}
        editable={!authLoading}
        style={styles.TextInput}
        secureTextEntry
      />

      <Button
        onPress={() => HandleLogin({email: isEmail, password: isPassword})}
        mode="contained"
        disabled={authLoading || isError.Email || isError.Password}
        color={Colors.Primary}
        style={styles.SignInButton}
        loading={authLoading}>
        {i18n.Signup.Title}
      </Button>
    </View>
  );
};

export default SignupForm;
