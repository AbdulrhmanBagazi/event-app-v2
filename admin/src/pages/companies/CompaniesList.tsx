import {
  Datagrid,
  TextField,
  SimpleList,
  DateField,
  List,
  useGetList,
  Loading,
  useRefresh,
  ShowButton,
  EditButton,
} from 'react-admin'
import { useMediaQuery, Theme } from '@mui/material'
import MyError from '../../layout/MyError'
import CompaniesListActions from './components/CompaniesListActions'
import SuspendedBooleanField from './components/SuspendedBooleanField'

const CompaniesList = () => {
  const { data, isLoading } = useGetList(
    'Companies',
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
      // filters={CompaniesListFilters}
      actions={<CompaniesListActions />}
      exporter={false}
      perPage={10}
      emptyWhileLoading
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.email}
          linkType="show"
        />
      ) : (
        <Datagrid isRowSelectable={() => false} bulkActionButtons={false} size="medium">
          <TextField source="id" sortable={false} />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="logo_url" />
          <SuspendedBooleanField source="suspended" />
          <DateField source="createdAt" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

export default CompaniesList

// id       String @id @default(uuid()) @db.Uuid
// email    String @unique
// name     String
// password String
