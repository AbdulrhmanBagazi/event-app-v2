import { BooleanInput, Edit, TabbedForm, FormTab, Loading, useRefresh, useGetOne } from 'react-admin'
import SectionEditToolbar from './components/SectionEditToolbar'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'

const SectionEdit = () => {
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

  if (isLoading) return <Loading />

  if (!data) return <MyError onClick={() => refresh()} />

  return (
    <Edit
      mutationMode="pessimistic"
      sx={{ maxWidth: 600 }}
      redirect="show"
      queryOptions={{
        onError: (err) => {
          return null
        },
        refetchOnReconnect: true,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
      }}>
      <TabbedForm toolbar={<SectionEditToolbar />}>
        <FormTab label="resources.Section.showtabs.edit">
          <BooleanInput label="resources.Section.fields.published" source="published" fullWidth />
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}

export default SectionEdit
