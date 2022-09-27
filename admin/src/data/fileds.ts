const users: { [k: string]: string } = {
  User_list: 'id email verfied suspended createdAt Type',
  User: 'id email verfied suspended createdAt Type Profile {id createdAt updatedAt userId firstName lastName nationality nationalID dateOfBirth gender whatsapp phone}',
  update_User: 'suspended',
}

const companies: { [k: string]: string } = {
  Companies_list: 'id email name contact logo_url suspended createdAt',
  Companies: 'id email name contact logo_url suspended createdAt',
  create_Companies: 'id email name contact',
  CompaniesEvents:
    'id published createdAt updatedAt companyId title content title_en content_en image_url location_url status',
  update_Companies: 'logo_url suspended contact email name',
}

const events: { [k: string]: string } = {
  Event_list:
    'id published createdAt updatedAt companyId locationId title content title_en content_en image_url location_url status Location {title title_en}',
  Event:
    'id published createdAt updatedAt companyId locationId title content title_en content_en image_url location_url status Location {title title_en}',
  update_Event: 'published status title content title_en content_en image_url location_url',
}

const location: { [k: string]: string } = {
  Location_list: 'id title title_en createdAt updatedAt',
  Location: 'id title title_en createdAt updatedAt',
  update_Location: 'title title_en',
  LocationEvents:
    'id createdAt updatedAt companyId title content title_en content_en image_url location_url status',
}

const dashboard: { [k: string]: string } = {
  DashboardData: 'Users_count Companies_count Events_count Locations_count',
}

const Fileds: { [k: string]: string } = {
  ...users,
  ...companies,
  ...events,
  ...location,
  ...dashboard,
}

export default Fileds
