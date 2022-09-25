import { Edit, TabbedForm, FormTab, Loading, useRefresh, useGetOne, SelectInput } from 'react-admin'
import EventEditToolbar from './components/EventEditToolbar'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'

const EventEdit = () => {
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
    <Edit
      mutationMode="pessimistic"
      redirect="show"
      sx={{ maxWidth: 600 }}
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
      <TabbedForm toolbar={<EventEditToolbar />}>
        <FormTab label="resources.Event.edittabs.edit">
          <SelectInput
            source="status"
            label="resources.Event.fields.status"
            choices={[
              { id: 'SOON', name: 'resources.Event.status.soon' },
              { id: 'ACTIVE', name: 'resources.Event.status.active' },
              { id: 'COMPLETED', name: 'resources.Event.status.completed' },
            ]}
            optionText="name"
            fullWidth
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}

export default EventEdit
