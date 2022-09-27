import { NullableBooleanInput, ReferenceInput, SelectInput } from 'react-admin'

const EventListFilters = (val: string) => [
  <NullableBooleanInput source="published" nullLabel="filters.all" />,
  <SelectInput
    source="status"
    choices={[
      { id: 'SOON', name: 'resources.Event.status.soon' },
      { id: 'ACTIVE', name: 'resources.Event.status.active' },
      { id: 'COMPLETED', name: 'resources.Event.status.completed' },
    ]}
    optionText="name"
  />,
  <ReferenceInput source="locationId" reference="Location" label="resources.Event.fields.location_title">
    <SelectInput
      optionText={val === 'en' ? 'title_en' : 'title'}
      label="resources.Event.fields.location_title"
      fullWidth
    />
  </ReferenceInput>,
]

export default EventListFilters
