import {
  BooleanInput,
  Edit,
  TabbedForm,
  FormTab,
  Loading,
  useRefresh,
  useGetOne,
  TextInput,
} from 'react-admin'
import CompaniesEditToolbar from './components/CompaniesEditToolbar'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'

const CompaniesEdit = () => {
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

  if (isLoading) return <Loading />

  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <Edit
      mutationMode="pessimistic"
      redirect="show"
      // redirect={false}
      // actions={false}
      queryOptions={{
        onError: (err) => {
          return null
        },
        // useErrorBoundary: (err) => {
        //   return true
        // },
        refetchOnReconnect: true,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
      }}>
      <TabbedForm toolbar={<CompaniesEditToolbar />}>
        <FormTab label="resources.Companies.showtabs.edit">
          <BooleanInput label="resources.Companies.fields.suspended" source="suspended" />
          <TextInput label="resources.Companies.fields.logo_url" source="logo_url" />
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}

export default CompaniesEdit
