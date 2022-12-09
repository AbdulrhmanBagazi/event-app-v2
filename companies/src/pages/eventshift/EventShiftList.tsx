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
  FunctionField,
  useTranslate,
} from 'react-admin'
import { useMediaQuery, Theme } from '@mui/material'
import MyError from '../../layout/MyError'
import I18nTime from '../../components/I18nTime.apply'
import EventShiftListAside from './components/EventShiftListAside'
import EventShiftListFilter from './components/EventShiftListFilter'
import Chip from '@mui/material/Chip'

const EventShiftList = () => {
  const { data, isLoading } = useGetList(
    'eventshift',
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
      emptyWhileLoading
      filters={EventShiftListFilter(locale)}
      aside={<EventShiftListAside />}
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
          <FunctionField
            source="start_time"
            render={(record: any) => <I18nTime time={record.start_time} Language={locale} />}
          />
          <FunctionField
            source="end_time"
            render={(record: any) => <I18nTime time={record.end_time} Language={locale} />}
          />
          <FunctionField
            source="status"
            render={(record: any) => <Chip label={translate(record.status)} />}
          />
          <DateField source="createdAt" />
        </Datagrid>
      )}
    </List>
  )
}

export default EventShiftList
