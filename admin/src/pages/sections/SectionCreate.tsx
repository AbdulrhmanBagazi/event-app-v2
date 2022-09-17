import { Create, SimpleForm, TextInput, required } from 'react-admin'

const SectionCreate = () => (
  <Create redirect="show" sx={{ maxWidth: 600 }}>
    <SimpleForm>
      <TextInput label="resources.Section.fields.title" source="title" validate={[required()]} fullWidth />
      <TextInput
        label="resources.Section.fields.title_en"
        source="title_en"
        validate={[required()]}
        fullWidth
      />
    </SimpleForm>
  </Create>
)

export default SectionCreate
