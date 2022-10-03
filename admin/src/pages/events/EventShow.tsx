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
  useCreatePath,
  WithRecord,
  ImageField,
  UrlField,
  FunctionField,
  useLocaleState,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ChipField,
} from 'react-admin'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import { Link } from 'react-router-dom'
import { OpenInNew } from '../../theme/icons'
import EventShowToolBar from './components/EventShowToolBar'

const EventShow = () => {
  const [locale] = useLocaleState()
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
      actions={<EventShowToolBar data={data} />}
      emptyWhileLoading>
      <TabbedShowLayout>
        <Tab label="resources.Event.showtabs.show">
          {/* <Labeled label="resources.Event.fields.id">
            <TextField source="id" />
          </Labeled> */}
          <Labeled label="resources.Event.fields.companyId">
            <WithRecord
              label="author"
              render={(record) => (
                <Link to={createPath({ resource: 'companies', type: 'show', id: record.companyId })}>
                  <OpenInNew />
                </Link>
              )}
            />
          </Labeled>
          <Labeled label="resources.Event.fields.locationId">
            <WithRecord
              render={(record) => (
                <Link to={createPath({ resource: 'location', type: 'show', id: record.locationId })}>
                  <OpenInNew />
                </Link>
              )}
            />
          </Labeled>
          <Labeled label="resources.Event.fields.location">
            <FunctionField
              render={(record: any) => (locale === 'en' ? record.Location.title_en : record.Location.title)}
            />
          </Labeled>
          <Labeled label="resources.Event.fields.app_sectionId">
            <FunctionField
              render={(record: any) =>
                locale === 'en' ? record.App_section?.title_en : record.App_section?.title
              }
            />
          </Labeled>

          <Labeled label="resources.Event.fields.createdAt">
            <DateField source="createdAt" />
          </Labeled>
          <Labeled label="resources.Event.fields.updatedAt">
            <DateField source="updatedAt" />
          </Labeled>
          <Labeled label="resources.Event.fields.status">
            <ChipField source="status" size="small" />
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
          <Labeled label="resources.Event.fields.location_url">
            <UrlField source="location_url" target="_blank" />
          </Labeled>
          <Labeled label="resources.Event.fields.image_url">
            <ImageField
              source="image_url"
              title="image_url"
              sx={{ '& img': { maxWidth: 250, maxHeight: 250, objectFit: 'contain' } }}
            />
          </Labeled>
        </Tab>
        <Tab label="resources.Event.showtabs.eventjob">
          <ReferenceManyField
            pagination={<Pagination />}
            label=""
            reference="eventjobEvents"
            target="eventjob"
            perPage={5}>
            <Datagrid
              isRowSelectable={() => false}
              bulkActionButtons={false}
              rowClick="show"
              resource="eventjob">
              {/* <TextField source="id" sortable={false} /> */}
              <TextField source="title" />
              <TextField source="title_en" />
              <ChipField source="status" size="small" />
              <TextField source="rate" />
              <ChipField source="rate_type" size="small" />
              <DateField source="createdAt" />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default EventShow
