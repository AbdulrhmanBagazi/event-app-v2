const users: { [k: string]: string } = {
  User_list: 'id email verfied suspended createdAt Type',
  User: 'id email verfied suspended createdAt Type Profile {id createdAt updatedAt userId firstName lastName nationality nationalID dateOfBirth, gender}',
  update_User: 'id suspended',
  Profile: 'id createdAt updatedAt userId firstName lastName nationality nationalID dateOfBirth gender',
}

const companies: { [k: string]: string } = {
  Companies_list: 'id email name logo_url suspended createdAt',
  Companies: 'id email name logo_url suspended createdAt',
  create_Companies: 'id email name',
  CompaniesEvents:
    'id published createdAt updatedAt companyId title content title_en content_en image_url location_url status',
}

const events: { [k: string]: string } = {
  Event_list:
    'id published createdAt updatedAt companyId sectionId title content title_en content_en image_url location_url status',
  Event:
    'id published createdAt updatedAt companyId sectionId title content title_en content_en image_url location_url status',
  update_Event: 'id published',
}

const sections: { [k: string]: string } = {
  Section_list: 'id published  title  title_en createdAt updatedAt',
  Section: 'id published  title  title_en createdAt updatedAt',
  update_Section: 'id published  title  title_en createdAt updatedAt',
  SectionEvents:
    'id published createdAt updatedAt companyId title content title_en content_en image_url location_url status',
}

const Fileds: { [k: string]: string } = {
  ...users,
  ...companies,
  ...events,
  ...sections,
}

export default Fileds
