import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
  useLocaleState,
} from 'react-admin'

const EventCreate = () => {
  const [locale] = useLocaleState()

  return (
    <Create redirect="show">
      <SimpleForm>
        <ReferenceInput source="companyId" reference="Companies">
          <SelectInput validate={required()} />
        </ReferenceInput>
        <ReferenceInput source="sectionId" reference="Section">
          <SelectInput validate={required()} optionText={locale === 'en' ? 'title_en' : 'title'} />
        </ReferenceInput>
        <TextInput label="resources.Event.fields.title" source="title" validate={[required()]} />
        <TextInput label="resources.Event.fields.content" source="content" validate={[required()]} />

        <TextInput label="resources.Event.fields.title_en" source="title_en" validate={[required()]} />
        <TextInput label="resources.Event.fields.content_en" source="content_en" validate={[required()]} />

        <TextInput label="resources.Event.fields.image_url" source="image_url" validate={[required()]} />
        <TextInput
          label="resources.Event.fields.location_url"
          source="location_url"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  )
}

export default EventCreate
