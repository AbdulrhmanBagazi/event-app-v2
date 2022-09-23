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
  useLocaleState,
  ShowButton,
  EditButton,
  WithRecord,
} from 'react-admin'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import ColoredTextField from './components/ColoredTextField'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import SuspendedBooleanFieldEvents from './components/SuspendedBooleanFieldEvents'

const CompaniesShow = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetOne(
    'Companies',
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
        // useErrorBoundary: (err) => {
        //   return true
        // },
      }}
      emptyWhileLoading>
      <TabbedShowLayout>
        <Tab label="resources.Companies.showtabs.show">
          <Labeled label="resources.Companies.fields.id">
            <TextField source="id" />
          </Labeled>
          <Labeled label="resources.Companies.fields.suspended">
            <SuspendedBooleanField source="suspended" />
          </Labeled>
          <Labeled label="resources.Companies.fields.name">
            <TextField source="name" />
          </Labeled>
          <Labeled label="resources.Companies.fields.email">
            <TextField source="email" />
          </Labeled>
          <Labeled label="resources.Companies.fields.createdAt">
            <DateField source="createdAt" />
          </Labeled>
          <Labeled label="resources.Companies.fields.logo_url">
            <WithRecord
              label="author"
              render={(record) => (
                <a href={record.logo_url} target="_blank" rel="noreferrer">
                  <TextField source="logo_url" />
                </a>
              )}
            />
          </Labeled>
        </Tab>
        <Tab label="resources.Companies.showtabs.Events">
          <ReferenceManyField
            pagination={<Pagination />}
            label=""
            reference="CompaniesEvents"
            target="companyId"
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
              <SuspendedBooleanFieldEvents source="published" label="resources.Companies.Events.published" />
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

export default CompaniesShow
