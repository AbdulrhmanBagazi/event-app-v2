const events: { [k: string]: string } = {
  Event_list:
    'id published createdAt updatedAt title content title_en content_en image_url location_url status locationId Location {title title_en} details details_en',
  Event:
    'id published createdAt updatedAt title content title_en content_en image_url location_url status locationId Location {title title_en} details details_en',
  update_Event: 'status details details_en',
  eventjobEvents:
    'id createdAt updatedAt title title_en status rate rate_type eventId Event {id title title_en}',
  eventshiftEvents: 'id createdAt updatedAt start_time end_time status eventId Event {id title title_en}',
}

const Location: { [k: string]: string } = {
  Location_list: 'id title  title_en',
  Location: 'id title  title_en',
  Location_getMany: 'id title  title_en',
}

const dashboard: { [k: string]: string } = {
  DashboardData: 'Events_count Jobs_count Shifts_count',
}

const eventjob: { [k: string]: string } = {
  eventjob_list:
    'id createdAt updatedAt title title_en status rate rate_type eventId Event {id title title_en}',
  eventjob: 'id createdAt updatedAt title title_en status rate rate_type eventId Event {id title title_en}',
  update_eventjob: 'title title_en status rate rate_type',
  create_eventjob: 'title title_en status rate rate_type eventId',
}

const eventshift: { [k: string]: string } = {
  eventshift_list:
    'id createdAt updatedAt start_time end_time status companyId eventId Event {id title title_en}',
  eventshift: 'id createdAt updatedAt start_time end_time status companyId eventId Event {id title title_en}',
  update_eventshift: 'start_time end_time status',
  create_eventshift: 'start_time end_time status eventId',
}

const applicants: { [k: string]: string } = {
  applicants_list:
    'id createdAt updatedAt eventId companyId userId shiftId jobId name nationality nationalID dateOfBirth gender status contact {phone whatsapp} event {id title title_en}',
  applicants:
    'id createdAt updatedAt eventId companyId userId shiftId jobId name nationality nationalID dateOfBirth gender status contact {phone whatsapp} event {id title title_en}',
}

const Fileds: { [k: string]: string } = {
  ...events,
  ...Location,
  ...dashboard,
  ...eventjob,
  ...eventshift,
  ...applicants,
}

export default Fileds
