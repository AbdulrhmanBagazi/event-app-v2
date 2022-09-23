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
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  EditButton,
  useLocaleState,
} from 'react-admin'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import ColoredTextField from '../companies/components/ColoredTextField'

const SectionShow = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetOne(
    'Section',
    { id },
    {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )
  const refresh = useRefresh()
  const [locale] = useLocaleState()

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
        <Tab label="resources.Section.showtabs.show">
          <Labeled label="resources.Section.fields.id">
            <TextField source="id" />
          </Labeled>
          <Labeled label="resources.Section.fields.createdAt">
            <DateField source="createdAt" />
          </Labeled>
          <Labeled label="resources.Section.fields.updatedAt">
            <DateField source="updatedAt" />
          </Labeled>
          <Labeled label="resources.Section.fields.published">
            <SuspendedBooleanField source="published" />
          </Labeled>
          <Labeled label="resources.Section.fields.title">
            <TextField source="title" />
          </Labeled>

          <Labeled label="resources.Section.fields.title_en">
            <TextField source="title_en" />
          </Labeled>
        </Tab>
        <Tab label="resources.Companies.showtabs.Events">
          <ReferenceManyField
            pagination={<Pagination />}
            label=""
            reference="SectionEvents"
            target="sectionId"
            perPage={5}>
            <Datagrid isRowSelectable={() => false} bulkActionButtons={false}>
              <TextField source="id" sortable={false} />
              <TextField
                source={locale === 'en' ? 'title_en' : 'title'}
                label="resources.Companies.Events.title"
              />
              <TextField
                source={locale === 'en' ? 'content_en' : 'content'}
                label="resources.Companies.Events.content"
              />
              <ColoredTextField source="status" label="resources.Companies.Events.status" />
              <SuspendedBooleanField source="published" label="resources.Companies.Events.published" />
              <DateField source="createdAt" label="resources.Companies.Events.createdAt" />
              <DateField source="updatedAt" label="resources.Companies.Events.updatedAt" />
              <ShowButton resource="Event" />
              <EditButton resource="Event" />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default SectionShow
