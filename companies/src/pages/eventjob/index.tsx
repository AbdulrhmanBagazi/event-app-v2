import EventJobCreate from './EventJobCreate'
import EventJobEdit from './EventJobEdit'
import EventJobList from './EventJobList'
import EventJobShow from './EventJobShow'

const EventJobResource = {
  list: EventJobList,
  create: EventJobCreate,
  edit: EventJobEdit,
  show: EventJobShow,
}

export default EventJobResource
