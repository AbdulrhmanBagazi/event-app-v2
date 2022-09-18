import React, {useState} from 'react';
import {
  AuthenticatedTypes,
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
} from '../../../../typs';
import {Button, TextInput} from 'react-native-paper';
import {useAuth} from '../../../../context/auth/auth.context';
import {styles} from './styles.signinForm';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {View} from 'react-native';
import {useError} from '../../../../context/error/error.context';
import {useI18nContext} from '../../../../context/I18n/i18n.context';

const SigninForm = () => {
  const {authLoading, SignIn} = useAuth() as AuthenticatedTypes;
  const {Colors} = useThemeContext() as ThemeContextType;
  const {ThrowError} = useError() as ErrorContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const [isEmail, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
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

    const [error] = await SignIn(values);

    if (error?.status === 401) {
      ThrowError(Locals.Errors.SignIn);
      setError({
        Email: true,
        Password: true,
      });
    }

    setTimeout(() => {
      setError({
        Email: false,
        Password: false,
      });
    }, 1000);

    // return SignIn(values);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={Locals.Signin.Email}
        value={isEmail}
        onChangeText={val => validateEmail(val)}
        onBlur={() => validateEmail(isEmail)}
        error={isError.Email}
        activeOutlineColor={Colors.Secondary}
        editable={!authLoading}
        style={styles.TextInput}
      />

      <TextInput
        mode="outlined"
        label={Locals.Signin.Password}
        value={isPassword}
        onChangeText={val => validatePassword(val)}
        onBlur={() => validatePassword(isPassword)}
        error={isError.Password}
        activeOutlineColor={Colors.Secondary}
        editable={!authLoading}
        style={styles.TextInput}
        secureTextEntry
      />

      <Button
        onPress={() => HandleLogin({email: isEmail, password: isPassword})}
        mode="contained"
        disabled={authLoading || isError.Email || isError.Password}
        color={Colors.Primary}
        labelStyle={{color: Colors.OnPrimary}}
        style={styles.SignInButton}
        loading={authLoading}>
        {Locals.Signin.Title}
      </Button>
    </View>
  );
};

export default SigninForm;
