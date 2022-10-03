import React, {useState} from 'react';
import {
  AuthenticatedTypes,
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
} from '../../../../typs';
import {Button, TextInput} from 'react-native-paper';
import {UseAuth} from '../../../../context/auth/auth.context';
import {styles} from './styles.signupForm';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {Linking, View} from 'react-native';
import {UseError} from '../../../../context/error/error.context';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import CustomText from '../../../../components/customText/customText';
import {PrivacyURL, TermsURL} from '../../../../../config/config';

const SignupForm = () => {
  const {Locals} = UseI18nContext() as I18nContextType;
  const {authLoading, SignUp} = UseAuth() as AuthenticatedTypes;
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {ThrowError} = UseError() as ErrorContextType;
  const [secure, setSecure] = useState(true);
  const [secureRepeat, setSecureRepeat] = useState(true);
  const [isPasswordRepeat, setPasswordRepeat] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isError, setError] = useState({
    Email: false,
    Password: false,
    PasswordRepeat: false,
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
    const reg = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );

    setPassword(password);

    if (reg.test(password)) {
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

  const validatePasswordRepeate = (password: string) => {
    setPasswordRepeat(password);

    if (password !== isPassword) {
      isError.PasswordRepeat = true;
      return setError({
        ...isError,
      });
    }
    isError.PasswordRepeat = false;
    return setError({
      ...isError,
    });
  };

  const HandleLogin = async (values: {email: string; password: string}) => {
    const reg = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEmail.test(values.email)) {
      isError.Email = true;
      return setError({
        ...isError,
      });
    }

    if (values.password !== isPasswordRepeat) {
      return setError({
        Email: false,
        Password: false,
        PasswordRepeat: true,
      });
    }

    if (!reg.test(values.password)) {
      return setError({
        Email: false,
        Password: true,
        PasswordRepeat: true,
      });
    }

    const [error] = await SignUp(values);

    if (error?.status === 400) {
      ThrowError(Locals.Errors.EmailUsed);
      isError.Email = true;
      setError({
        ...isError,
      });
    }

    setTimeout(() => {
      setError({
        Email: false,
        Password: false,
        PasswordRepeat: false,
      });
    }, 1000);

    // return SignUp(values);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={Locals.Signup.Email}
        value={isEmail}
        onChangeText={val => validateEmail(val)}
        onBlur={() => validateEmail(isEmail)}
        mode="outlined"
        error={isError.Email}
        activeOutlineColor={Colors.Secondary}
        editable={!authLoading}
        style={[styles.TextInput, {backgroundColor: Colors.Background}]}
        keyboardType="email-address"
      />

      <TextInput
        label={Locals.Signup.Password}
        value={isPassword}
        onChangeText={val => validatePassword(val)}
        onBlur={() => validatePassword(isPassword)}
        mode="outlined"
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

      <TextInput
        label={Locals.Signup.PasswordRepeate}
        value={isPasswordRepeat}
        onChangeText={val => validatePasswordRepeate(val)}
        onBlur={() => validatePasswordRepeate(isPasswordRepeat)}
        mode="outlined"
        error={isError.PasswordRepeat}
        activeOutlineColor={Colors.Secondary}
        editable={!authLoading}
        style={[styles.TextInput, {backgroundColor: Colors.Background}]}
        secureTextEntry={secureRepeat}
        right={
          <TextInput.Icon
            icon={secureRepeat ? 'eye-off' : 'eye'}
            onPress={() => setSecureRepeat(!secureRepeat)}
          />
        }
      />

      <Button
        onPress={() => HandleLogin({email: isEmail, password: isPassword})}
        mode="contained"
        disabled={
          authLoading ||
          isError.Email ||
          isError.Password ||
          isError.PasswordRepeat
        }
        color={Colors.Secondary}
        style={styles.SignInButton}
        loading={authLoading}>
        {Locals.Signup.Title}
      </Button>

      <View style={styles.agree}>
        <CustomText
          text={Locals.Signup.agree}
          fontWeight="normal"
          Color={'OnBackground'}
        />
        <Button
          mode="text"
          onPress={() => Linking.openURL(TermsURL)}
          disabled={authLoading}>
          {Locals.Signup.terms}
        </Button>
        <CustomText
          text={Locals.Signup.and}
          fontWeight="normal"
          Color={'OnBackground'}
        />
        <Button
          mode="text"
          onPress={() => Linking.openURL(PrivacyURL)}
          disabled={authLoading}>
          {Locals.Signup.privacy}
        </Button>
      </View>
    </View>
  );
};

export default SignupForm;
