import React, {useState} from 'react';
import {
  CountryCode,
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
  UserProfileType,
  UserUpdateTypes,
} from '../../../../typs';
import {Button, RadioButton, Text, TextInput} from 'react-native-paper';
import {styles} from './styles.userProfile';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {useError} from '../../../../context/error/error.context';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Page from '../../../../layout/page';
import {useMutation} from '@apollo/client';
import {
  Update_UserProfileDocument,
  Update_UserProfileMutation,
  Update_UserProfileMutationVariables,
} from '../../../../graphql/generated';
import DatePicker from './components/datePicker.userProfile';
import moment from 'moment';
import {useAuth} from '../../../../context/auth/auth.context';
import {View} from 'react-native';
import ModalCountry from './components/countryPicker.userProfile';
import countries from 'i18n-iso-countries';
import {useHeaderHeight} from '@react-navigation/elements';

const UpdateUserProfile = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('SA');
  const {Colors} = useThemeContext() as ThemeContextType;
  const {ThrowError} = useError() as ErrorContextType;
  const {Locals, Lang} = useI18nContext() as I18nContextType;
  const {AddProfile, UpdateLoading, user} = useAuth() as UserUpdateTypes;
  const [firstName, setfirstName] = useState({
    val: user?.Profile?.firstName,
    error: false,
  });
  const [lastName, setlastName] = useState({
    val: user.Profile.lastName,
    error: false,
  });
  const [nationality, setnationality] = useState({
    val: user.Profile.nationality,
    error: false,
  });
  const [gender, setgender] = useState({
    val: user.Profile.gender,
    error: false,
  });
  const [nationalID, setnationalID] = useState({
    val: user.Profile.nationalID,
    error: false,
  });
  const newDate = user.Profile.dateOfBirth
    ? new Date(user.Profile.dateOfBirth)
    : undefined;

  const [dateOfBirth, setdateOfBirth] = useState({
    val: newDate,
    error: false,
  });
  const [mutateFunction, {loading}] = useMutation<
    Update_UserProfileMutation,
    Update_UserProfileMutationVariables
  >(Update_UserProfileDocument);

  const convertToArabicNumber = async (string: any) => {
    return string.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string) => {
      return d.charCodeAt(0) - 1632;
    });
  };

  const HandleLogin = async (values: {
    firstName: string;
    lastName: string;
    nationality: string;
    nationalID: string;
    dateOfBirth: Date | undefined;
    gender: string;
  }) => {
    if (dateOfBirth.val === undefined) {
      return setdateOfBirth({...dateOfBirth, error: true});
    }

    if (gender.val === '') {
      return setgender({...gender, error: true});
    }

    UpdateLoading(true);
    try {
      const date = await moment(new Date(dateOfBirth.val)).format('YYYY-MM-DD');
      const nID = await convertToArabicNumber(nationalID.val);

      const val = await mutateFunction({
        variables: {...values, dateOfBirth: date, nationalID: nID},
      });

      if (val.data?.Update_UserProfile) {
        const data = {
          id: val.data?.Update_UserProfile.id,
          createdAt: val.data?.Update_UserProfile.createdAt,
          updatedAt: val.data?.Update_UserProfile.updatedAt,
          userId: val.data?.Update_UserProfile.userId,
          firstName: val.data?.Update_UserProfile.firstName,
          lastName: val.data?.Update_UserProfile.lastName,
          nationality: val.data?.Update_UserProfile.nationality,
          nationalID: val.data?.Update_UserProfile.nationalID,
          dateOfBirth: val.data?.Update_UserProfile.dateOfBirth,
          gender: val.data?.Update_UserProfile.gender,
        } as UserProfileType;

        UpdateLoading(false);
        AddProfile(data);
        return ThrowError(Locals.UserProfile.profileUpdated);
      }
    } catch (e) {
      UpdateLoading(false);
      return ThrowError(Locals.Errors.unknown);
    }
  };

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setOpen(false);
      setdateOfBirth({val: params.date, error: false});
    },
    [setOpen, setdateOfBirth],
  );

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
    setdateOfBirth({val: undefined, error: true});
  }, []);

  const onSelect = (val: any) => {
    setCountryCode(val.cca2);
    setnationality({val: val.cca2, error: false});
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
          {Locals.UserProfile.Title}
        </Text>
        <TextInput
          mode="outlined"
          label={Locals.UserProfile.firstName}
          value={firstName.val}
          onChangeText={val => setfirstName({val, error: val.length <= 0})}
          onBlur={() =>
            setfirstName({...firstName, error: firstName.val.length <= 0})
          }
          error={firstName.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
          style={[styles.TextInput, {backgroundColor: Colors.Background}]}
        />

        <TextInput
          mode="outlined"
          label={Locals.UserProfile.lastName}
          value={lastName.val}
          onChangeText={val => setlastName({val, error: val.length <= 0})}
          onBlur={() =>
            setlastName({...lastName, error: lastName.val.length <= 0})
          }
          error={lastName.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
          style={[styles.TextInput, {backgroundColor: Colors.Background}]}
        />

        <TextInput
          mode="outlined"
          label={Locals.UserProfile.nationalID}
          value={nationalID.val}
          onChangeText={val => setnationalID({val, error: val.length <= 0})}
          onBlur={() =>
            setnationalID({...nationalID, error: nationalID.val.length <= 0})
          }
          error={nationalID.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
          style={[styles.TextInput, {backgroundColor: Colors.Background}]}
          keyboardType="number-pad"
        />

        <RadioButton.Group
          onValueChange={val => setgender({val, error: false})}
          value={gender.val}>
          <View style={styles.ViewRowInput}>
            <RadioButton.Item
              style={[styles.RadioButton]}
              label={Locals.UserProfile.male}
              labelStyle={{
                color: gender.error ? Colors.Error : Colors.OnBackground,
              }}
              value="male"
              mode="android"
              position="leading"
            />
            <RadioButton.Item
              style={styles.RadioButton}
              label={Locals.UserProfile.female}
              labelStyle={{
                color: gender.error ? Colors.Error : Colors.OnBackground,
              }}
              value="female"
              mode="android"
              position="leading"
            />
          </View>
        </RadioButton.Group>

        <Button
          onPress={() => setVisible(true)}
          uppercase={false}
          mode="outlined"
          style={styles.countryPickerButton}
          color={nationality.error ? Colors.Error : Colors.Secondary}
          disabled={loading}>
          {Locals.UserProfile.nationality + ' '}
          {nationality.val ? countries.getName(nationality.val, Lang) : ''}
        </Button>

        <Button
          onPress={() => setOpen(true)}
          uppercase={false}
          mode="outlined"
          style={styles.datePickerButton}
          color={dateOfBirth.error ? Colors.Error : Colors.Secondary}
          disabled={loading}>
          {Locals.UserProfile.dateOfBirth + ' '}
          {dateOfBirth.val
            ? moment(new Date(dateOfBirth.val)).format('YYYY-MM-DD')
            : ''}
        </Button>
        <DatePicker
          onConfirmSingle={(params: any) => onConfirmSingle(params)}
          onDismissSingle={() => onDismissSingle()}
          open={open}
          date={dateOfBirth.val}
          saveLabel={Locals.UserProfile.save}
          label={Locals.UserProfile.date}
        />

        <ModalCountry
          open={visible}
          onClose={() => setVisible(false)}
          countryCode={countryCode}
          onSelect={e => onSelect(e)}
          Lang={Lang === 'en' ? 'en' : 'ar'}
        />

        <Button
          onPress={() =>
            HandleLogin({
              firstName: firstName.val,
              lastName: lastName.val,
              nationalID: nationalID.val,
              nationality: nationality.val,
              dateOfBirth: dateOfBirth?.val,
              gender: gender.val,
            })
          }
          mode="contained"
          disabled={
            firstName.error ||
            lastName.error ||
            nationality.error ||
            nationalID.error ||
            dateOfBirth.error ||
            loading
          }
          color={Colors.Primary}
          labelStyle={{color: Colors.OnPrimary}}
          style={styles.updateProfileButton}>
          {Locals.UserProfile.update}
        </Button>
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default UpdateUserProfile;
