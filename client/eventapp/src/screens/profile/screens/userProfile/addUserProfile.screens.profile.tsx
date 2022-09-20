import React, {useState} from 'react';
import {
  AuthenticatedTypes,
  ErrorContextType,
  I18nContextType,
  ThemeContextType,
  UserProfileType,
} from '../../../../typs';
import {Button, TextInput} from 'react-native-paper';
import {styles} from './styles.userProfile';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {useError} from '../../../../context/error/error.context';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Page from '../../../../layout/page';
import {useMutation} from '@apollo/client';
import {
  Create_UserProfileDocument,
  Create_UserProfileMutation,
  Create_UserProfileMutationVariables,
} from '../../../../graphql/generated';
import DatePicker from './components/datePicker.userProfile';
import moment from 'moment';
import {useAuth} from '../../../../context/auth/auth.context';

const AddUserProfile = () => {
  const [open, setOpen] = React.useState(false);
  const {Colors} = useThemeContext() as ThemeContextType;
  const {ThrowError} = useError() as ErrorContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {AddProfile, UpdateLoading} = useAuth() as AuthenticatedTypes;
  const [firstName, setfirstName] = useState({val: '', error: false});
  const [lastName, setlastName] = useState({val: '', error: false});
  const [nationality, setnationality] = useState({val: '', error: false});
  const [nationalID, setnationalID] = useState({
    val: '',
    error: false,
  });
  const [dateOfBirth, setdateOfBirth] = useState({
    val: undefined,
    error: false,
  });
  const [mutateFunction, {loading}] = useMutation<
    Create_UserProfileMutation,
    Create_UserProfileMutationVariables
  >(Create_UserProfileDocument);

  const HandleLogin = async (values: {
    firstName: string;
    lastName: string;
    nationality: string;
    nationalID: string;
    dateOfBirth: Date | undefined;
  }) => {
    if (dateOfBirth.val === '' || dateOfBirth.val === undefined) {
      return setdateOfBirth({...dateOfBirth, error: true});
    }
    UpdateLoading(true);
    try {
      const date = await moment(new Date(dateOfBirth.val)).format('YYYY-MM-DD');
      const val = await mutateFunction({
        variables: {...values, dateOfBirth: date},
      });

      if (val.data?.Create_UserProfile) {
        const data = {
          id: val.data?.Create_UserProfile.id,
          createdAt: val.data?.Create_UserProfile.createdAt,
          updatedAt: val.data?.Create_UserProfile.updatedAt,
          userId: val.data?.Create_UserProfile.userId,
          firstName: val.data?.Create_UserProfile.firstName,
          lastName: val.data?.Create_UserProfile.lastName,
          nationality: val.data?.Create_UserProfile.nationality,
          nationalID: val.data?.Create_UserProfile.nationalID,
          dateOfBirth: val.data?.Create_UserProfile.dateOfBirth,
        } as UserProfileType;

        UpdateLoading(false);
        AddProfile(data);
        return ThrowError(Locals.UserProfile.profileCreated);
      }
    } catch (e) {
      UpdateLoading(false);
      return ThrowError('error');
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

  return (
    <Page paddingHorizontal={5}>
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled">
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
          style={styles.TextInput}
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
          style={styles.TextInput}
        />

        <TextInput
          mode="outlined"
          label={Locals.UserProfile.nationality}
          value={nationality.val}
          onChangeText={val => setnationality({val, error: val.length <= 0})}
          onBlur={() =>
            setnationality({...nationality, error: nationality.val.length <= 0})
          }
          error={nationality.error}
          activeOutlineColor={Colors.Secondary}
          editable={!loading}
          style={styles.TextInput}
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
          style={styles.TextInput}
        />

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

        <Button
          onPress={() =>
            HandleLogin({
              firstName: firstName.val,
              lastName: lastName.val,
              nationalID: nationalID.val,
              nationality: nationality.val,
              dateOfBirth: dateOfBirth?.val,
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
          {Locals.UserProfile.add}
        </Button>
      </KeyboardAwareScrollView>
    </Page>
  );
};

export default AddUserProfile;
