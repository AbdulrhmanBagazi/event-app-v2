import React, {useState, useEffect} from 'react';
import {Platform, View} from 'react-native';
import Page from '../../layout/page';
import {useHeaderHeight} from '@react-navigation/elements';
import {
  ActivityIndicator,
  Button,
  Caption,
  // Checkbox,
  Chip,
  Divider,
  Headline,
  IconButton,
  Modal,
  Text,
} from 'react-native-paper';
import {UseI18nContext} from '../../context/I18n/i18n.context';
import {
  ErrorContextType,
  I18nContextType,
  ParamList,
  ThemeContextType,
  UserUpdateTypes,
} from '../../typs';
import {styles} from './styles.apply';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  Create_ApplicantsDocument,
  Create_ApplicantsMutation,
  Create_ApplicantsMutationVariables,
  // Create_ApplicantsResult,
  Eventjob,
  Eventshift,
} from '../../graphql/generated';
import {ScrollView} from 'react-native-gesture-handler';
import I18nTime from './components/I18nTime.apply';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {UseError} from '../../context/error/error.context';
import ApplyConfirm from './apply.confirm';
import {UseAuth} from '../../context/auth/auth.context';
import {useMutation} from '@apollo/client';

const Apply = () => {
  const [mutateFunction, {loading}] = useMutation<
    Create_ApplicantsMutation,
    Create_ApplicantsMutationVariables
  >(Create_ApplicantsDocument);
  const route = useRoute<RouteProp<ParamList, 'Apply'>>();
  const {setOptions, addListener, goBack} = useNavigation();
  const data = route.params.params;
  const {Locals, Lang} = UseI18nContext() as I18nContextType;
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {ThrowError} = UseError() as ErrorContextType;
  const {user, isAuthenticated} = UseAuth() as UserUpdateTypes;
  const [job, setjob] = useState<{
    val: {
      id: string;
      rate: number | null;
      rate_type: string | null;
      title: string | null;
      title_en: string | null;
    };
    error: boolean;
  }>({
    val: {id: '', rate: null, rate_type: null, title: null, title_en: null},
    error: true,
  });
  const [shift, setshift] = useState<{
    val: {
      id: string;
      start_time: string | null;
      end_time: string | null;
    };
    error: boolean;
  }>({
    val: {
      id: '',
      start_time: null,
      end_time: null,
    },
    error: true,
  });
  const [ModalLoading, setModalLoading] = useState(false);
  const [ConfirmInformation, setConfirmInformation] = useState(false);
  const HeaderHeight = useHeaderHeight();

  const HandleJob = async (id: string) => {
    const selectedJob = data.Event_Jobs.find(val => val.id === id);

    if (job.val.id === id) {
      setjob({
        val: {
          id: '',
          rate: null,
          rate_type: null,
          title: null,
          title_en: null,
        },
        error: true,
      });
      return;
    }

    if (selectedJob) {
      setjob({
        val: {
          id: selectedJob.id,
          rate: selectedJob.rate,
          rate_type: selectedJob.rate_type,
          title: selectedJob.title,
          title_en: selectedJob.title_en,
        },
        error: false,
      });
    }
  };

  const HandleShift = async (id: string) => {
    const selectedshit = data.Event_Shifts.find(val => val.id === id);

    if (shift.val.id === id) {
      setshift({
        val: {
          id: '',
          start_time: null,
          end_time: null,
        },
        error: true,
      });
      return;
    }

    if (selectedshit) {
      setshift({
        val: {
          id: selectedshit.id,
          start_time: selectedshit.start_time,
          end_time: selectedshit.end_time,
        },
        error: false,
      });
    }
  };

  useEffect(() => {
    return setOptions({
      title: '',
      gestureEnabled: !ModalLoading,
      headerBackVisible: !ModalLoading,
    });
  }, [setOptions, ModalLoading]);

  useEffect(
    () =>
      addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen

        if (Platform.OS === 'ios') {
          return;
        }

        if (!loading && Platform.OS === 'android') {
          return;
        }

        e.preventDefault();

        ThrowError(Locals.Errors.moment);
      }),
    [addListener, loading, ThrowError, Locals.Errors.moment],
  );

  const ConfirmInformations = () => {
    setConfirmInformation(!ConfirmInformation);
  };

  const HandleApply = async () => {
    setModalLoading(true);
    try {
      const Dob = user?.Profile?.dateOfBirth
        ? user?.Profile?.dateOfBirth.toString()
        : '';

      const val = await mutateFunction({
        variables: {
          companyId: data.companyId,
          eventId: data.id,
          shiftId: shift.val.id,
          jobId: job.val.id,
          name: user?.Profile?.firstName + ' ' + user?.Profile?.lastName,
          nationality: user?.Profile?.nationality,
          nationalID: user?.Profile?.nationalID,
          dateOfBirth: Dob,
          gender: user?.Profile?.gender,
        },
      });

      if (
        val.data?.Create_Applicants?.__typename === 'CreateApplicantsExsist'
      ) {
        setTimeout(() => {
          ThrowError(Locals.Apply.cantApply);
          setModalLoading(false);
        }, 1000);
        return;
      }

      if (
        val.data?.Create_Applicants?.__typename === 'CreateApplicantsUnknown'
      ) {
        setTimeout(() => {
          ThrowError(Locals.Errors.unknown);
          setModalLoading(false);
        }, 1000);
        return;
      }

      if (val.data?.Create_Applicants?.__typename === 'Applicants') {
        setTimeout(() => {
          ThrowError(Locals.Apply.Thankyoumsg);
          setModalLoading(false);
          goBack();
        }, 1000);
        return;
      }

      setTimeout(() => {
        ThrowError(Locals.Apply.Thankyoumsg);
        setModalLoading(false);
        goBack();
      }, 1000);

      return;
    } catch (e) {
      setTimeout(() => {
        ThrowError(Locals.Errors.unknown);
        setModalLoading(false);
      }, 1000);
      return;
    }
  };

  return (
    <Page paddingHorizontal={20}>
      <View style={{height: HeaderHeight}} />
      {!ConfirmInformation ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Text style={styles.title}>{Locals.Apply.Header}</Text> */}
            <Headline>{Locals.Apply.Select_Job}</Headline>
            <ScrollView horizontal>
              {data.Event_Jobs.map((val: Eventjob, i: number) => {
                return (
                  <View key={i} style={styles.RadioItem}>
                    <Chip
                      style={
                        job.val.id === val.id
                          ? {
                              backgroundColor: Colors.Secondary,
                            }
                          : {}
                      }
                      textStyle={
                        job.val.id === val.id
                          ? {
                              color: Colors.OnSecondary,
                            }
                          : {}
                      }
                      icon={props => (
                        <Icon
                          name={val.status === 'CLOSED' ? 'lock' : 'briefcase'}
                          size={16}
                          color={
                            job.val.id === val.id
                              ? Colors.OnSecondary
                              : props.color
                          }
                        />
                      )}
                      disabled={val.status === 'CLOSED' ? true : false}
                      selected={job.val.id === val.id}
                      onPress={() => HandleJob(val.id)}>
                      {Lang === 'en' ? val.title_en : val.title}
                    </Chip>
                  </View>
                );
              })}
            </ScrollView>
            <View style={styles.Item}>
              <IconButton
                icon="cash-multiple"
                color={Colors.Primary}
                size={20}
              />
              <Text>
                {job.val.rate ? job.val.rate : '------------'}{' '}
                {job.val.rate_type
                  ? job.val.rate_type === 'DAY'
                    ? Locals.SingleEvent.SARday
                    : Locals.SingleEvent.SARmonth
                  : null}
              </Text>
            </View>
            <Divider style={styles.Divider} />
            <Headline>{Locals.Apply.Select_Shift}</Headline>
            <ScrollView horizontal>
              {data.Event_Shifts.map((val: Eventshift, i: number) => {
                return (
                  <View key={i} style={styles.RadioItem}>
                    <Chip
                      style={
                        shift.val.id === val.id
                          ? {
                              backgroundColor: Colors.Secondary,
                            }
                          : {}
                      }
                      icon={props => (
                        <Icon
                          name={val.status === 'CLOSED' ? 'lock' : 'briefcase'}
                          size={16}
                          color={
                            shift.val.id === val.id
                              ? Colors.OnSecondary
                              : props.color
                          }
                        />
                      )}
                      textStyle={
                        shift.val.id === val.id
                          ? {
                              color: Colors.OnSecondary,
                            }
                          : {}
                      }
                      disabled={val.status === 'CLOSED' ? true : false}
                      selected={shift.val.id === val.id}
                      onPress={() => HandleShift(val.id)}>
                      <I18nTime time={val.start_time} Language={Lang} />
                      {Locals.Apply.TimeTo}
                      <I18nTime time={val.end_time} Language={Lang} />
                    </Chip>
                  </View>
                );
              })}
            </ScrollView>
            <View style={styles.Item}>
              <IconButton
                icon="clock-time-one-outline"
                color={Colors.Primary}
                size={20}
              />
              <Text>
                {shift.val.start_time ? (
                  <I18nTime time={shift.val.start_time} Language={Lang} />
                ) : (
                  '------------'
                )}
              </Text>
              <IconButton
                icon={Lang === 'en' ? 'arrow-right' : 'arrow-left'}
                color={Colors.Primary}
                size={20}
              />
              <Text>
                {shift.val.end_time ? (
                  <I18nTime time={shift.val.end_time} Language={Lang} />
                ) : (
                  '------------'
                )}
              </Text>
            </View>
            <View style={styles.Divider} />

            <View style={styles.ItemCaption}>
              <IconButton icon="alert-circle" color={Colors.Error} size={20} />
              <Caption style={[styles.Caption, {color: Colors.Error}]}>
                {Locals.Apply.Caption}
              </Caption>
            </View>
          </ScrollView>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginBottom: Platform.OS === 'ios' ? 40 : 20,
              backgroundColor: Colors.Background,
            }}>
            <Button
              onPress={() => ConfirmInformations()}
              mode="contained"
              disabled={
                job.error ||
                shift.error ||
                !isAuthenticated ||
                user?.Profile === null
              }
              color={Colors.Primary}
              labelStyle={{color: Colors.OnPrimary}}>
              {!isAuthenticated
                ? Locals.Apply.SigninRequired
                : user?.Profile
                ? Locals.Apply.next
                : Locals.Apply.profilemsg}
            </Button>
          </View>
        </>
      ) : (
        <ApplyConfirm
          apply={() => HandleApply()}
          loading={ModalLoading}
          back={() => ConfirmInformations()}
          start_time={shift.val.start_time ? shift.val.start_time : ''}
          end_time={shift.val.end_time ? shift.val.end_time : ''}
          job={job.val}
        />
      )}
      <Modal
        dismissable={false}
        visible={ModalLoading}
        theme={{
          colors: {
            backdrop: 'rgba(0,0,0,0.25)',
          },
        }}
        contentContainerStyle={[
          styles.Modal,
          {backgroundColor: Colors.Surface},
        ]}>
        <View style={styles.loadingView}>
          <ActivityIndicator animating={true} color={Colors.Primary} />
        </View>
      </Modal>
    </Page>
  );
};

export default Apply;
