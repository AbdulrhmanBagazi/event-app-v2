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
  useTranslate,
  FunctionField,
} from 'react-admin'
import { useMediaQuery, Theme } from '@mui/material'
import MyError from '../../layout/MyError'
import EventJobListAside from './components/EventJobListAside'
import EventJobListFliters from './components/EventJobListFliters'
import Chip from '@mui/material/Chip'

const EventJobList = () => {
  const { data, isLoading } = useGetList(
    'eventjob',
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
      exporter={false}
      hasCreate={false}
      filters={EventJobListFliters(locale)}
      aside={<EventJobListAside />}
      emptyWhileLoading
      perPage={25}
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => (locale === 'en' ? record.title_en : record.title)}
          linkType="show"
        />
      ) : (
        <Datagrid isRowSelectable={() => false} bulkActionButtons={false} rowClick="show">
          {/* <TextField source="id" sortable={false} /> */}
          <TextField source={locale === 'en' ? 'Event.title_en' : 'Event.title'} sortable={false} />
          <TextField source="title" />
          <TextField source="title_en" />
          <FunctionField
            source="status"
            render={(record: any) => <Chip label={translate(record.status)} />}
          />
          <TextField source="rate" />
          <FunctionField
            source="rate_type"
            render={(record: any) => <Chip label={translate(record.rate_type)} />}
          />
          <DateField source="createdAt" />
        </Datagrid>
      )}
    </List>
  )
}

export default EventJobList
