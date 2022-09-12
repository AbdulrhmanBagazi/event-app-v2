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
} from 'react-admin'
import { useMediaQuery, Theme } from '@mui/material'
import ColoredBooleanField from './components/ColoredBooleanField'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import UserListFilters from './components/UserListFilters'
import MyError from '../../layout/MyError'

const UserList = () => {
  const { data, isLoading } = useGetList(
    'User',
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

  if (isLoading) return <Loading />

  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <List
      // debounce={3000}
      filters={UserListFilters}
      exporter={false}
      // perPage={5}
      emptyWhileLoading
      queryOptions={{
        onError: (err) => {
          return null
        },
        // useErrorBoundary: (err) => {
        //   return true
        // },
      }}>
      {isSmall ? (
        <SimpleList primaryText={(record) => record.name} secondaryText={(record) => record.email} />
      ) : (
        <Datagrid isRowSelectable={() => false} bulkActionButtons={false} size="medium">
          <TextField source="id" sortable={false} />
          <TextField source="email" />
          <ColoredBooleanField source="verfied" />
          <SuspendedBooleanField source="suspended" />
          <DateField source="createdAt" />
          <TextField source="postsCount" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

export default UserList
