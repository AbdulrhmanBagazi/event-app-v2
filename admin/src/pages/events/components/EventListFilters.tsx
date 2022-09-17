import { NullableBooleanInput, SelectInput } from 'react-admin'

const EventListFilters = [
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
]

export default EventListFilters
