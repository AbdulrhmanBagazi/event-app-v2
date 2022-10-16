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
  useLocaleState,
  FunctionField,
  ChipField,
  ImageField,
  UrlField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ArrayField,
  RichTextField,
} from 'react-admin'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import EventShowToolBar from './components/EventShowToolBar'
import Grid from '@mui/material/Grid'
import I18nTime from '../../components/I18nTime.apply'

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

  if (isLoading) return <Loading />
  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <Show
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}
      actions={<EventShowToolBar data={data} />}
      emptyWhileLoading>
      <TabbedShowLayout>
        <Tab label="resources.Event.showtabs.show">
          {/* <Labeled label="resources.Event.fields.id">
            <TextField source="id" />
          </Labeled> */}

          <Grid container spacing={2}>
            <Grid item xs>
              <Labeled label="resources.Event.fields.title">
                <TextField source="title" />
              </Labeled>
            </Grid>
            <Grid item xs>
              <Labeled label="resources.Event.fields.title_en">
                <TextField source="title_en" />
              </Labeled>
            </Grid>
            <Grid item xs>
              <Labeled label="resources.Event.fields.content">
                <TextField source="content" />
              </Labeled>
            </Grid>
            <Grid item xs>
              <Labeled label="resources.Event.fields.content_en">
                <TextField source="content_en" />
              </Labeled>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs>
              <Labeled label="resources.Event.fields.status">
                <ChipField source="status" size="small" />
              </Labeled>
            </Grid>
            <Grid item xs>
              <Labeled label="resources.Event.fields.published">
                <SuspendedBooleanField source="published" />
              </Labeled>
            </Grid>

            <Grid item xs>
              <Labeled label="resources.Event.fields.createdAt">
                <DateField source="createdAt" />
              </Labeled>
            </Grid>
            <Grid item xs>
              <Labeled label="resources.Event.fields.updatedAt">
                <DateField source="updatedAt" />
              </Labeled>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs>
              <Labeled label="resources.Event.fields.location">
                <FunctionField
                  render={(record: any) =>
                    locale === 'en' ? record.Location.title_en : record.Location.title
                  }
                />
              </Labeled>
            </Grid>
          </Grid>

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

        <Tab label="resources.Event.showtabs.details">
          <ArrayField source="details">
            <Datagrid isRowSelectable={() => false} bulkActionButtons={false}>
              <TextField source="title" />
              <RichTextField source="content" />
            </Datagrid>
          </ArrayField>
        </Tab>

        <Tab label="resources.Event.showtabs.details_en">
          <ArrayField source="details_en">
            <Datagrid isRowSelectable={() => false} bulkActionButtons={false}>
              <TextField source="title" />
              <RichTextField source="content" />
            </Datagrid>
          </ArrayField>
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

        <Tab label="resources.Event.showtabs.eventshift">
          <ReferenceManyField
            pagination={<Pagination />}
            label=""
            reference="eventshiftEvents"
            target="eventshift"
            perPage={5}>
            <Datagrid
              isRowSelectable={() => false}
              bulkActionButtons={false}
              rowClick="show"
              resource="eventshift">
              {/* <TextField source="id" sortable={false} /> */}

              <FunctionField
                source="start_time"
                render={(record: any) => <I18nTime time={record.start_time} Language={locale} />}
              />

              <FunctionField
                source="end_time"
                render={(record: any) => <I18nTime time={record.end_time} Language={locale} />}
              />
              <ChipField source="status" size="small" />
              <DateField source="createdAt" />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default EventShow
