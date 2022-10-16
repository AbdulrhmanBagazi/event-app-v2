import {
  Edit,
  TabbedForm,
  FormTab,
  Loading,
  useRefresh,
  useGetOne,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  TextInput,
  ReferenceInput,
  useLocaleState,
  required,
} from 'react-admin'
import EventEditToolbar from './components/EventEditToolbar'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import {
  RichTextInput,
  RichTextInputToolbar,
  ListButtons,
  LevelSelect,
  FormatButtons,
} from 'ra-input-rich-text'

const EventEdit = () => {
  const { id } = useParams()
  const [locale] = useLocaleState()
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
      // redirect={false}
      // sx={{ maxWidth: 600 }}
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
        <FormTab label="resources.Event.edittabs.editinfo">
          <ReferenceInput source="locationId" reference="Location" perPage={100}>
            <SelectInput
              optionText={locale === 'en' ? 'title_en' : 'title'}
              fullWidth
              validate={[required()]}
            />
          </ReferenceInput>
          <TextInput label="resources.Event.fields.title" source="title" validate={[required()]} fullWidth />
          <TextInput
            label="resources.Event.fields.content"
            source="content"
            validate={[required()]}
            fullWidth
          />

          <TextInput
            label="resources.Event.fields.title_en"
            source="title_en"
            validate={[required()]}
            fullWidth
          />
          <TextInput
            label="resources.Event.fields.content_en"
            source="content_en"
            validate={[required()]}
            fullWidth
          />

          <TextInput
            label="resources.Event.fields.location_url"
            source="location_url"
            validate={[required()]}
            fullWidth
          />
          <SelectInput
            source="status"
            label="resources.Event.fields.status"
            choices={[
              { id: 'SOON', name: 'resources.Event.status.soon' },
              { id: 'ACTIVE', name: 'resources.Event.status.active' },
              { id: 'COMPLETED', name: 'resources.Event.status.completed' },
            ]}
            optionText="name"
            validate={[required()]}
            fullWidth
          />
        </FormTab>
        <FormTab label="resources.Event.edittabs.editdetails">
          <ArrayInput source="details">
            <SimpleFormIterator fullWidth>
              <TextInput
                source="title"
                helperText={false}
                label="resources.Event.fields.title"
                fullWidth
                validate={required()}
              />
              <RichTextInput
                fullWidth
                toolbar={
                  <RichTextInputToolbar>
                    <LevelSelect />
                    <FormatButtons />
                    <ListButtons />
                  </RichTextInputToolbar>
                }
                source="content"
                label="resources.Event.fields.content"
                validate={required()}
              />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>
        <FormTab label="resources.Event.edittabs.editdetails_en">
          <ArrayInput source="details_en">
            <SimpleFormIterator fullWidth>
              <TextInput
                source="title"
                helperText={false}
                label="resources.Event.fields.title"
                fullWidth
                validate={required()}
              />
              <RichTextInput
                fullWidth
                toolbar={
                  <RichTextInputToolbar>
                    <LevelSelect />
                    <FormatButtons />
                    <ListButtons />
                  </RichTextInputToolbar>
                }
                source="content"
                label="resources.Event.fields.content"
                validate={required()}
              />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}

export default EventEdit
