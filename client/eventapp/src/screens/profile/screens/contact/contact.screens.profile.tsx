import React, {useState} from 'react';
import {
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
  UserProfileType,
  UserUpdateTypes,
} from '../../../../typs';
import {Button, Text, TextInput} from 'react-native-paper';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {UseError} from '../../../../context/error/error.context';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Page from '../../../../layout/page';
import {useMutation} from '@apollo/client';
import {
  Contact_UserProfileDocument,
  Contact_UserProfileMutation,
  Contact_UserProfileMutationVariables,
} from '../../../../graphql/generated';
import {UseAuth} from '../../../../context/auth/auth.context';
import {styles} from './styles.contact';
import {View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

const Contact = () => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {ThrowError} = UseError() as ErrorContextType;
  const {Locals} = UseI18nContext() as I18nContextType;
  const {UpdateLoading, user, AddProfile} = UseAuth() as UserUpdateTypes;
  const [phone, setphone] = useState<{
    val: string | undefined;
    error: boolean;
  }>({
    val: user.Profile.phone,
    error: false,
  });
  const [whatsapp, setwhatsapp] = useState<{
    val: string | undefined;
    error: boolean;
  }>({
    val: user.Profile.whatsapp,
    error: false,
  });

  const [mutateFunction, {loading}] = useMutation<
    Contact_UserProfileMutation,
    Contact_UserProfileMutationVariables
  >(Contact_UserProfileDocument);

  const convertToArabicNumber = async (string: any) => {
    if (string) {
      return string.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string) => {
        return d.charCodeAt(0) - 1632;
      });
    }

    return null;
  };

  const HandleLogin = async (values: {
    phone: string | undefined;
    whatsapp: string | undefined;
  }) => {
    if (phone.val === null) {
      return setphone({
        ...phone,
        error: true,
      });
    }

    if (whatsapp.val === null) {
      return setwhatsapp({
        ...whatsapp,
        error: true,
      });
    }

    UpdateLoading(true);
    const p = await convertToArabicNumber(values.phone);
    const w = await convertToArabicNumber(values.whatsapp);
    try {
      const val = await mutateFunction({
        variables: {
          phone: p,
          whatsapp: w,
        },
      });

      if (val.data) {
        UpdateLoading(false);
        setphone({
          val: val.data.Contact_UserProfile?.phone
            ? val.data.Contact_UserProfile?.phone
            : undefined,
          error: false,
        });
        setwhatsapp({
          val: val.data.Contact_UserProfile?.whatsapp
            ? val.data.Contact_UserProfile?.whatsapp
            : undefined,
          error: false,
        });

        if (val.data.Contact_UserProfile) {
          const data = {
            id: val.data?.Contact_UserProfile.id,
            createdAt: val.data?.Contact_UserProfile.createdAt,
            updatedAt: val.data?.Contact_UserProfile.updatedAt,
            userId: val.data?.Contact_UserProfile.userId,
            firstName: val.data?.Contact_UserProfile.firstName,
            lastName: val.data?.Contact_UserProfile.lastName,
            nationality: val.data?.Contact_UserProfile.nationality,
            nationalID: val.data?.Contact_UserProfile.nationalID,
            dateOfBirth: val.data?.Contact_UserProfile.dateOfBirth,
            gender: val.data?.Contact_UserProfile.gender,
            phone: val.data?.Contact_UserProfile.phone,
            whatsapp: val.data?.Contact_UserProfile.whatsapp,
          } as UserProfileType;

          AddProfile(data);
        }

        return ThrowError(Locals.UserProfile.contactUpdated);
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
          numberOfLines={2}
          style={[
            styles.title,
            {
              color: Colors.OnBackground,
            },
          ]}>
          {Locals.Contact.Title}
        </Text>

        <TextInput
          mode="outlined"
          label={Locals.Contact.phone}
          value={phone.val}
          onChangeText={val =>
            setphone({val, error: val.length < 10 || val.length > 10})
          }
          onBlur={() =>
            setphone({
              ...phone,
              error: phone.val
                ? phone.val.length < 10 || phone.val.length > 10
                : true,
            })
          }
          error={phone.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
          style={[styles.TextInput, {backgroundColor: Colors.Background}]}
          placeholder="05xxxxxxxx"
          keyboardType="number-pad"
          // autoFocus
        />

        <TextInput
          mode="outlined"
          label={Locals.Contact.whatsapp}
          value={whatsapp.val}
          onChangeText={val =>
            setwhatsapp({val, error: val.length < 10 || val.length > 10})
          }
          onBlur={() =>
            setwhatsapp({
              ...whatsapp,
              error: whatsapp.val
                ? whatsapp.val.length < 10 || whatsapp.val.length > 10
                : true,
            })
          }
          error={whatsapp.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
          style={[styles.TextInput, {backgroundColor: Colors.Background}]}
          right={
            <TextInput.Icon
              icon={'repeat'}
              color={Colors.Primary}
              onPress={() =>
                setwhatsapp({
                  val: phone.val,
                  error: phone.val
                    ? phone.val.length < 10 || phone.val.length > 10
                    : false,
                })
              }
            />
          }
          placeholder="05xxxxxxxx"
          keyboardType="number-pad"
        />

        <Button
          onPress={() =>
            HandleLogin({
              phone: phone.val,
              whatsapp: whatsapp.val,
            })
          }
          mode="contained"
          disabled={phone.error || whatsapp.error || loading}
          color={Colors.Primary}
          labelStyle={{color: Colors.OnPrimary}}
          style={styles.updateProfileButton}>
          {Locals.UserProfile.update}
        </Button>
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default Contact;
