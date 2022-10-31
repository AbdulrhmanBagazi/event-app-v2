import { TopToolbar, Button, EditButton } from 'react-admin'
import { Link } from 'react-router-dom'
import { Add, RemoveRedEye } from '../../../theme/icons'

const AddNewCommentButton = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: '/eventjob/create',
      // Here we specify the initial record for the create view
      state: { record: { companyId: record.data.companyId, eventId: record.data.id } },
    }}
    label="create_job">
    <Add />
  </Button>
)

const AddNewShiftButton = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: '/eventshift/create',
      // Here we specify the initial record for the create view
      state: { record: { companyId: record.data.companyId, eventId: record.data.id } },
    }}
    label="create_shift">
    <Add />
  </Button>
)

const ShowApplicantsButton = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: '/event_applicants',
      // Here we specify the initial record for the create view
      search: `filter=${JSON.stringify({
        eventId: record.data.id,
        status: 'PENDING',
      })}`,
    }}
    label="show_applicants">
    <RemoveRedEye />
  </Button>
)

const EventShowToolBar = (data: any) => (
  <TopToolbar>
    <AddNewCommentButton record={data} />
    <AddNewShiftButton record={data} />
    <ShowApplicantsButton record={data} />
    <EditButton />
  </TopToolbar>
)

export default EventShowToolBar
