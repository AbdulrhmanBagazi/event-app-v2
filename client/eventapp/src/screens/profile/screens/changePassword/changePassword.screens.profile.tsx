import React, {useState} from 'react';
import {
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
  UserUpdateTypes,
} from '../../../../typs';
import {Button, Text, TextInput} from 'react-native-paper';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {useError} from '../../../../context/error/error.context';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Page from '../../../../layout/page';
import {useMutation} from '@apollo/client';
import {
  Change_PasswordDocument,
  Change_PasswordMutation,
  Change_PasswordMutationVariables,
} from '../../../../graphql/generated';
import {useAuth} from '../../../../context/auth/auth.context';
import {styles} from './styles.changePassword';
import {useHeaderHeight} from '@react-navigation/elements';
import {View} from 'react-native';

const ChangePassword = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {ThrowError} = useError() as ErrorContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {UpdateLoading} = useAuth() as UserUpdateTypes;
  const [password, setpassword] = useState({
    val: '',
    error: false,
  });
  const [repeatpassword, setrepeatpassword] = useState({
    val: '',
    error: false,
  });
  const [secure, setSecure] = useState(true);
  const [secureRepeat, setSecureRepeat] = useState(true);

  const [mutateFunction, {loading}] = useMutation<
    Change_PasswordMutation,
    Change_PasswordMutationVariables
  >(Change_PasswordDocument);

  const validatePassword = (val: string) => {
    const reg = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );

    if (reg.test(val)) {
      return setpassword({val, error: false});
    }

    return setpassword({val, error: true});
  };

  const validatePasswordRepeate = (val: string) => {
    if (val !== password.val) {
      return setrepeatpassword({val, error: true});
    }

    return setrepeatpassword({val, error: false});
  };

  const HandleLogin = async (values: {password: string}) => {
    const reg = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );

    if (values.password !== repeatpassword.val) {
      return setrepeatpassword({...repeatpassword, error: true});
    }

    if (!reg.test(values.password)) {
      return setpassword({val: values.password, error: true});
    }

    UpdateLoading(true);
    try {
      const val = await mutateFunction({
        variables: {password: values.password},
      });

      if (val.data) {
        UpdateLoading(false);
        setpassword({val: '', error: false});
        setrepeatpassword({val: '', error: false});
        return ThrowError(Locals.UserProfile.passwordChanged);
      }
    } catch (e) {
      UpdateLoading(false);
      return ThrowError(Locals.Errors.unknown);
    }
  };

  return (
    <Page paddingHorizontal={20}>
      <View style={{height: useHeaderHeight()}} />
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text
          style={[
            styles.title,
            {
              color: Colors.OnBackground,
            },
          ]}>
          {Locals.ChangePassword.Title}
        </Text>

        <TextInput
          mode="outlined"
          label={Locals.UserProfile.Password}
          value={password.val}
          onChangeText={val => validatePassword(val)}
          onBlur={() => validatePassword(password.val)}
          error={password.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
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
          mode="outlined"
          label={Locals.UserProfile.PasswordRepeate}
          value={repeatpassword.val}
          onChangeText={val => validatePasswordRepeate(val)}
          onBlur={() =>
            setrepeatpassword({
              ...repeatpassword,
              error: repeatpassword.val !== password.val,
            })
          }
          error={repeatpassword.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
          style={[styles.TextInput, {backgroundColor: Colors.Background}]}
          secureTextEntry={secureRepeat}
          right={
            <TextInput.Icon
              icon={secureRepeat ? 'eye-off' : 'eye'}
              onPress={() => setSecureRepeat(!secureRepeat)}
            />
          }
        />
      </KeyboardAwareScrollView>

      <Button
        onPress={() =>
          HandleLogin({
            password: password.val,
          })
        }
        mode="contained"
        disabled={password.error || repeatpassword.error || loading}
        color={Colors.Primary}
        labelStyle={{color: Colors.OnPrimary}}
        style={styles.ChangePasswordButton}>
        {Locals.UserProfile.update}
      </Button>
    </Page>
  );
};

export default ChangePassword;
