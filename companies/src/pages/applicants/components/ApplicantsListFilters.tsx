import { ReferenceInput, SelectInput } from 'react-admin'

const ApplicantsListFilters = [
  <ReferenceInput source="eventId" reference="Event" label="resources.applicants.fields.eventId" alwaysOn>
    <SelectInput optionText="title" fullWidth />
  </ReferenceInput>,
]

export default ApplicantsListFilters
