import { TopToolbar, Button, EditButton } from 'react-admin'
import { Link } from 'react-router-dom'
import { RemoveRedEye } from '../../../theme/icons'

const ShowEvent = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: `/Event/${record.data.Event.id}/show`,
      // Here we specify the initial record for the create view
    }}
    label="show_event">
    <RemoveRedEye />
  </Button>
)

const ShowApplicantsButton = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: '/applicants',
      // Here we specify the initial record for the create view
      search: `filter=${JSON.stringify({
        eventId: record.data.eventId,
        status: 'PENDING',
        jobId: record.data.id,
      })}`,
    }}
    label="show_applicants">
    <RemoveRedEye />
  </Button>
)

const EventJobShowToolBar = (data: any) => (
  <TopToolbar>
    <ShowEvent record={data} />
    <ShowApplicantsButton record={data} />
    <EditButton />
  </TopToolbar>
)

export default EventJobShowToolBar
