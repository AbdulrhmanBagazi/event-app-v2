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
  ChipField,
} from 'react-admin'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'

const EventJobShow = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetOne(
    'eventjob',
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
      }}
      emptyWhileLoading>
      <TabbedShowLayout>
        <Tab label="resources.eventjob.showtabs.show">
          {/* <Labeled label="resources.app_section.fields.id">
            <TextField source="id" />
          </Labeled> */}
          <Labeled label="resources.eventjob.fields.createdAt">
            <DateField source="createdAt" />
          </Labeled>
          <Labeled label="resources.eventjob.fields.updatedAt">
            <DateField source="updatedAt" />
          </Labeled>

          <Labeled label="resources.eventjob.fields.title">
            <TextField source="title" />
          </Labeled>

          <Labeled label="resources.eventjob.fields.title_en">
            <TextField source="title_en" />
          </Labeled>

          <Labeled label="resources.eventjob.fields.status">
            <ChipField source="status" size="small" />
          </Labeled>

          <Labeled label="resources.eventjob.fields.rate">
            <TextField source="rate" />
          </Labeled>

          <Labeled label="resources.eventjob.fields.rate_type">
            <ChipField source="rate_type" size="small" />
          </Labeled>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default EventJobShow
