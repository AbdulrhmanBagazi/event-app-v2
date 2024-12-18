import {
  Datagrid,
  TextField,
  SimpleList,
  DateField,
  List,
  useGetList,
  Loading,
  useRefresh,
  useLocaleState,
  ChipField,
  useTranslate,
  FunctionField,
} from 'react-admin'
import { useMediaQuery, Theme } from '@mui/material'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import MyError from '../../layout/MyError'
import EventListAside from './components/EventListAside'
import Chip from '@mui/material/Chip'

const EventList = () => {
  const { data, isLoading } = useGetList(
    'Event',
    {},
    {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const refresh = useRefresh()
  const [locale] = useLocaleState()
  const translate = useTranslate()

  if (isLoading) return <Loading />

  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <List
      // debounce={3000}
      exporter={false}
      perPage={25}
      aside={<EventListAside />}
      emptyWhileLoading
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => (locale === 'en' ? record.title_en : record.title)}
          secondaryText={() => <ChipField source="status" size="small" />}
          tertiaryText={() => <SuspendedBooleanField source="published" />}
          linkType="show"
        />
      ) : (
        <Datagrid isRowSelectable={() => false} bulkActionButtons={false} rowClick="show">
          {/* <TextField source="id" sortable={false} /> */}
          <TextField
            source={locale === 'en' ? 'Location.title_en' : 'Location.title'}
            sortable={false}
            label="resources.Event.fields.location_title"
          />
          <TextField source={locale === 'en' ? 'title_en' : 'title'} />
          <TextField source={locale === 'en' ? 'content_en' : 'content'} />
          <FunctionField
            source="status"
            render={(record: any) => <Chip label={translate(record.status)} />}
          />
          <SuspendedBooleanField source="published" />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
        </Datagrid>
      )}
    </List>
  )
}

export default EventList
