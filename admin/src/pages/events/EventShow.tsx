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
  Link,
  useCreatePath,
  WithRecord,
} from 'react-admin'
import ColoredTextField from './components/ColoredTextField'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'

const EventShow = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetOne(
    'Event',
    { id },
    {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )
  const refresh = useRefresh()
  const createPath = useCreatePath()

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
        <Tab label="resources.Event.showtabs.summary">
          <Labeled label="resources.Event.fields.id">
            <TextField source="id" />
          </Labeled>
          <Labeled label="resources.Event.fields.companyId">
            <WithRecord
              label="author"
              render={(record) => (
                <Link to={createPath({ resource: 'companies', type: 'show', id: record.companyId })}>
                  <TextField source="companyId" />
                </Link>
              )}
            />
          </Labeled>
          <Labeled label="resources.Event.fields.sectionId">
            <WithRecord
              render={(record) => (
                <Link to={createPath({ resource: 'section', type: 'show', id: record.sectionId })}>
                  <TextField source="sectionId" />
                </Link>
              )}
            />
          </Labeled>
          <Labeled label="resources.Event.fields.createdAt">
            <DateField source="createdAt" />
          </Labeled>
          <Labeled label="resources.Event.fields.updatedAt">
            <DateField source="updatedAt" />
          </Labeled>
          <Labeled label="resources.Event.fields.status">
            <ColoredTextField source="status" />
          </Labeled>
          <Labeled label="resources.Event.fields.published">
            <SuspendedBooleanField source="published" />
          </Labeled>
          <Labeled label="resources.Event.fields.title">
            <TextField source="title" />
          </Labeled>
          <Labeled label="resources.Event.fields.content">
            <TextField source="content" />
          </Labeled>
          <Labeled label="resources.Event.fields.title_en">
            <TextField source="title_en" />
          </Labeled>
          <Labeled label="resources.Event.fields.content_en">
            <TextField source="content_en" />
          </Labeled>
          <Labeled label="resources.Event.fields.image_url">
            <TextField source="image_url" />
          </Labeled>
          <Labeled label="resources.Event.fields.location_url">
            <TextField source="location_url" />
          </Labeled>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default EventShow