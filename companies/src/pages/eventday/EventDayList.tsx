import {
  Datagrid,
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
import EventShiftListFilter from './components/EventShiftListFilter'
import Chip from '@mui/material/Chip'

const EventDayList = () => {
  const { data, isLoading } = useGetList(
    'eventday',
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
      perPage={25}
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}>
      {isSmall ? (
        <SimpleList primaryText={(record) => record.date} linkType="show" />
      ) : (
        <Datagrid isRowSelectable={() => false} bulkActionButtons={false} rowClick="show">
          {/* <TextField source="id" sortable={false} /> */}
          <FunctionField
            source="status"
            render={(record: any) => <Chip label={translate(record.status)} />}
          />
          <DateField source="date" />
        </Datagrid>
      )}
    </List>
  )
}

export default EventDayList
