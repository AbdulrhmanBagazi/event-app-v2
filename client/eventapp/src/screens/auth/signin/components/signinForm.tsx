import React, {useState} from 'react';
import {
  AuthenticatedTypes,
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
} from '../../../../typs';
import {Button, TextInput} from 'react-native-paper';
import {UseAuth} from '../../../../context/auth/auth.context';
import {styles} from './styles.signinForm';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {View} from 'react-native';
import {UseError} from '../../../../context/error/error.context';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';

const SigninForm = () => {
  const {authLoading, SignIn} = UseAuth() as AuthenticatedTypes;
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {ThrowError} = UseError() as ErrorContextType;
  const {Locals} = UseI18nContext() as I18nContextType;
  const [secure, setSecure] = useState(true);
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
        style={[styles.TextInput, {backgroundColor: Colors.Background}]}
        keyboardType="email-address"
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
        style={[styles.TextInput, {backgroundColor: Colors.Background}]}
        secureTextEntry={secure}
        right={
          <TextInput.Icon
            icon={secure ? 'eye-off' : 'eye'}
            onPress={() => setSecure(!secure)}
          />
        }
      />

      <Button
        onPress={() => HandleLogin({email: isEmail, password: isPassword})}
        mode="contained"
        disabled={authLoading || isError.Email || isError.Password}
        color={Colors.Secondary}
        labelStyle={{color: Colors.OnSecondary}}
        style={styles.SignInButton}
        loading={authLoading}>
        {Locals.Signin.Title}
      </Button>
    </View>
  );
};

export default SigninForm;
