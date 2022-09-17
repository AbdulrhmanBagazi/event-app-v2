import {
  Datagrid,
  TextField,
  SimpleList,
  DateField,
  List,
  ShowButton,
  EditButton,
  useGetList,
  Loading,
  useRefresh,
  useLocaleState,
} from 'react-admin'
import { useMediaQuery, Theme } from '@mui/material'
import MyError from '../../layout/MyError'
import SuspendedBooleanField from './components/SuspendedBooleanField'

const SectionList = () => {
  const { data, isLoading } = useGetList(
    'Section',
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

  if (isLoading) return <Loading />

  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <List
      exporter={false}
      emptyWhileLoading
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => (locale === 'en' ? record.title_en : record.title)}
          tertiaryText={() => <SuspendedBooleanField source="published" />}
          linkType="show"
        />
      ) : (
        <Datagrid isRowSelectable={() => false} bulkActionButtons={false} size="medium">
          <TextField source="id" sortable={false} />
          <TextField source="title" />
          <TextField source="title_en" />
          <SuspendedBooleanField source="published" />
          <DateField source="createdAt" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

export default SectionList
