import {
  Labeled,
  TextField,
  Show,
  FunctionField,
  TabbedShowLayout,
  Tab,
  useGetOne,
  useRefresh,
  Loading,
  useLocaleState,
  useTranslate,
  DateField,
  Edit,
  TabbedForm,
  FormTab,
} from 'react-admin'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import Grid from '@mui/material/Grid'
import countries from 'i18n-iso-countries'
import moment from 'moment'
import Chip from '@mui/material/Chip'
import { WhatsApp } from '../../theme/icons'
import I18nTime from '../../components/I18nTime.apply'
import {
  // PendingButton,
  WaitlistButton,
  ApprovedButton,
  InterviewButton,
  DeclineButton,
} from './updateApplicantStatus/ApplicantStatusButtons'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
//add start_date
import ApplicantsEditToolbard from './components/ApplicantsEditToolbard'
import MyDaysPicker from './components/ApplicantsDatePicker'

const ApplicantsShow = () => {
  const { id } = useParams()
  const [locale] = useLocaleState()
  const translate = useTranslate()
  const { data, isLoading } = useGetOne(
    'applicants',
    { id },
    {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )
  const refresh = useRefresh()

  if (isLoading) return <Loading />
  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <>
      {data.status === 'APPROVED' && data.start_date === null ? (
        <Edit
          actions={false}
          mutationMode="pessimistic"
          redirect="show"
          queryOptions={{
            onError: (err) => {
              return null
            },
            refetchOnReconnect: true,
            refetchOnMount: true,
            refetchOnWindowFocus: true,
          }}>
          <TabbedForm toolbar={<ApplicantsEditToolbard />}>
            <FormTab label="resources.applicants.fields.start_date">
              <MyDaysPicker data={data} />
            </FormTab>
          </TabbedForm>
        </Edit>
      ) : (
        <Labeled
          label="resources.applicants.showtabs.update_status"
          sx={{
            paddingTop: 5,
            width: '100%',
          }}>
          <Stack
            direction="row"
            spacing={3}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              paddingTop: 1.5,
              width: '100%',
            }}>
            {/* <PendingButton record={data} /> */}
            <WaitlistButton record={data} />
            <InterviewButton record={data} />
            <ApprovedButton record={data} />
            <DeclineButton record={data} />
          </Stack>
        </Labeled>
      )}

      <Show
        queryOptions={{
          onError: (err) => {
            return null
          },
        }}
        emptyWhileLoading>
        <TabbedShowLayout>
          <Tab label="resources.applicants.showtabs.show">
            <Grid container spacing={2}>
              <Grid item xs>
                <Labeled label="resources.applicants.fields.event.title">
                  <TextField source={locale === 'en' ? 'event.title_en' : 'event.title'} sortable={false} />
                </Labeled>
              </Grid>

              <Grid item xs>
                <Labeled label="resources.applicants.fields.name">
                  <TextField source="name" />
                </Labeled>
              </Grid>

              <Grid item xs>
                <Labeled label="resources.applicants.fields.nationality">
                  <FunctionField
                    source="nationality"
                    render={(record: any) => countries.getName(record.nationality, locale)}
                  />
                </Labeled>
              </Grid>

              <Grid item xs>
                <Labeled label="resources.applicants.fields.nationalID">
                  <TextField source="nationalID" />
                </Labeled>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs>
                <Labeled label="resources.applicants.fields.gender">
                  {locale === 'en' ? (
                    <FunctionField source="gender" render={(record: any) => record.gender} />
                  ) : (
                    <FunctionField
                      source="gender"
                      render={(record: any) => (record.gender === 'male' ? 'ذكر' : 'انثى')}
                    />
                  )}
                </Labeled>
              </Grid>
              <Grid item xs>
                <Labeled label="resources.applicants.fields.age">
                  <FunctionField
                    label="resources.applicants.fields.age"
                    render={(record: any) => moment().diff(record.dateOfBirth, 'years')}
                  />
                </Labeled>
              </Grid>
              <Grid item xs>
                <Labeled label="resources.applicants.fields.contact.phone">
                  <FunctionField
                    source="contact.phone"
                    render={(record: any) => (record.contact.phone ? record.contact.phone : '............')}
                  />
                </Labeled>
              </Grid>
              <Grid item xs>
                <Labeled label="resources.applicants.fields.contact.whatsapp">
                  <FunctionField
                    source="contact.whatsapp"
                    render={(record: any) =>
                      record.contact.whatsapp ? (
                        <>
                          <a href={'whatsapp://send?phone=+966' + Number(record.contact.whatsapp)}>
                            <WhatsApp sx={{ color: 'green' }} />
                          </a>
                          {record.contact.whatsapp}
                        </>
                      ) : (
                        '............'
                      )
                    }
                  />
                </Labeled>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item>
                <Labeled label="resources.applicants.fields.status">
                  <FunctionField
                    source="status"
                    render={(record: any) => <Chip label={translate(record.status)} />}
                  />
                </Labeled>
              </Grid>
              <Grid item>
                <Labeled label="resources.applicants.fields.start_date">
                  <FunctionField
                    source="start_date"
                    render={(record: any) =>
                      record.start_date ? <DateField source="start_date" /> : translate('set_start_date')
                    }
                  />
                </Labeled>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Labeled label="resources.eventjob.fields.title">
                  <TextField source={locale === 'en' ? 'job.title_en' : 'job.title'} />
                </Labeled>
              </Grid>
              <Grid item xs>
                <Labeled label="resources.eventjob.fields.rate">
                  <TextField source="job.rate" />
                </Labeled>
              </Grid>
              <Grid item xs>
                <Labeled label="resources.eventjob.fields.rate_type">
                  <FunctionField
                    source="rate_type"
                    render={(record: any) => <Chip label={translate(record.job.rate_type)} />}
                  />
                </Labeled>
              </Grid>
              <Grid item xs>
                <Labeled label="resources.eventshift.fields.start_time">
                  <FunctionField
                    source="shift.start_time"
                    render={(record: any) => <I18nTime time={record.shift.start_time} Language={locale} />}
                  />
                </Labeled>
              </Grid>
              <Grid item xs>
                <Labeled label="resources.eventshift.fields.end_time">
                  <FunctionField
                    source="shift.end_time"
                    render={(record: any) => <I18nTime time={record.shift.end_time} Language={locale} />}
                  />
                </Labeled>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item>
                <Labeled label="resources.applicants.fields.createdAt">
                  <DateField source="createdAt" />
                </Labeled>
              </Grid>
              <Grid item>
                <Labeled label="resources.applicants.fields.updatedAt">
                  <DateField source="updatedAt" />
                </Labeled>
              </Grid>
            </Grid>
          </Tab>
        </TabbedShowLayout>
      </Show>
    </>
  )
}

export default ApplicantsShow
