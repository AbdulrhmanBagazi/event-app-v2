import {
  Labeled,
  DateField,
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  useGetOne,
  useRefresh,
  Loading,
  useLocaleState,
  FunctionField,
  useTranslate,
} from 'react-admin'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import Grid from '@mui/material/Grid'
import EventShiftShowToolBar from './components/EventShiftShowToolBar'
import I18nTime from '../../components/I18nTime.apply'
import Chip from '@mui/material/Chip'

const EventShiftShow = () => {
  const [locale] = useLocaleState()
  const { id } = useParams()
  const { data, isLoading } = useGetOne(
    'eventshift',
    { id },
    {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )
  const refresh = useRefresh()
  const translate = useTranslate()

  if (isLoading) return <Loading />
  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <Show
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}
      actions={<EventShiftShowToolBar data={data} />}
      emptyWhileLoading>
      <TabbedShowLayout>
        <Tab label="resources.eventshift.showtabs.show">
          {/* <Labeled label="resources.app_section.fields.id">
            <TextField source="id" />
          </Labeled> */}

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Labeled label="resources.eventshift.fields.Event.title">
                <TextField source={locale === 'en' ? 'Event.title_en' : 'Event.title'} />
              </Labeled>
            </Grid>
            <Grid item xs={4}>
              <Labeled label="resources.eventshift.fields.status">
                <FunctionField
                  source="status"
                  render={(record: any) => <Chip label={translate(record.status)} />}
                />
              </Labeled>
            </Grid>

            <Grid item xs={4}>
              <Labeled label="resources.eventshift.fields.start_time">
                <FunctionField
                  source="start_time"
                  render={(record: any) => <I18nTime time={record.start_time} Language={locale} />}
                />
              </Labeled>
            </Grid>
            <Grid item xs={4}>
              <Labeled label="resources.eventshift.fields.end_time">
                <FunctionField
                  source="end_time"
                  render={(record: any) => <I18nTime time={record.end_time} Language={locale} />}
                />
              </Labeled>
            </Grid>

            <Grid item xs={4}>
              <Labeled label="resources.eventshift.fields.createdAt">
                <DateField source="createdAt" />
              </Labeled>
            </Grid>
            <Grid item xs={4}>
              <Labeled label="resources.eventshift.fields.updatedAt">
                <DateField source="updatedAt" />
              </Labeled>
            </Grid>
          </Grid>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default EventShiftShow
