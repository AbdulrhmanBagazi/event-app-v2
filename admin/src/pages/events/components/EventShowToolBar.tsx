import { TopToolbar, Button, EditButton } from 'react-admin'
import { Link } from 'react-router-dom'

const AddNewCommentButton = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: '/eventjob/create',
      // Here we specify the initial record for the create view
      state: { record: { companyId: record.data.companyId, eventId: record.data.id } },
    }}
    label="create_job"
  />
)

const EventShowToolBar = (data: any) => (
  <TopToolbar>
    <EditButton />
    <AddNewCommentButton record={data} />
  </TopToolbar>
)

export default EventShowToolBar
