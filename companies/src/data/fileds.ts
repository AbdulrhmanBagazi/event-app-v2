const events: { [k: string]: string } = {
  Event_list:
    'id published createdAt updatedAt title content title_en content_en image_url location_url status Location {title title_en}',
  Event:
    'id published createdAt updatedAt title content title_en content_en image_url location_url status Location {title title_en}',
  update_Event: 'status',
}

const Location: { [k: string]: string } = {
  Location_list: 'id title  title_en',
  Location: 'id title  title_en',
  Location_getMany: 'id title  title_en',
}

const dashboard: { [k: string]: string } = {
  DashboardData: 'Events_count',
}

const Fileds: { [k: string]: string } = {
  ...events,
  ...Location,
  ...dashboard,
}

export default Fileds
