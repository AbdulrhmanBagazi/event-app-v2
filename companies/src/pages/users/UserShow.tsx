import {
  Labeled,
  DateField,
  TextField,
  Datagrid,
  ReferenceManyField,
  Show,
  TabbedShowLayout,
  Tab,
  Pagination,
  useGetOne,
  useRefresh,
  Loading,
} from 'react-admin'
import ColoredBooleanField from './components/ColoredBooleanField'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'

const UserShow = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetOne(
    'User',
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
    <Show
      queryOptions={{
        onError: (err) => {
          return null
        },
        // useErrorBoundary: (err) => {
        //   return true
        // },
      }}
      emptyWhileLoading>
      <TabbedShowLayout>
        <Tab label="resources.User.showtabs.summary">
          <Labeled label="resources.User.fields.id">
            <TextField source="id" />
          </Labeled>
          <Labeled label="resources.User.fields.email">
            <TextField source="email" />
          </Labeled>
          <Labeled label="resources.User.fields.postsCount">
            <TextField source="postsCount" />
          </Labeled>
          <Labeled label="resources.User.fields.createdAt">
            <DateField source="createdAt" />
          </Labeled>
          <Labeled label="resources.User.fields.verfied">
            <ColoredBooleanField source="verfied" />
          </Labeled>
          <Labeled label="resources.User.fields.suspended">
            <SuspendedBooleanField source="suspended" />
          </Labeled>
        </Tab>

        <Tab label="resources.User.showtabs.posts">
          <ReferenceManyField
            pagination={<Pagination />}
            label=""
            reference="UserPosts"
            target="autherId"
            perPage={5}>
            <Datagrid isRowSelectable={() => false} bulkActionButtons={false}>
              <TextField source="title" label="resources.User.posts.title" />
              <DateField source="createdAt" label="resources.User.posts.createdAt" />
              <ColoredBooleanField source="published" />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default UserShow
