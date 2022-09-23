const users: { [k: string]: string } = {
  User_list: 'id email verfied suspended createdAt Type',
  User: 'id email verfied suspended createdAt Type Profile {id createdAt updatedAt userId firstName lastName nationality nationalID dateOfBirth, gender}',
  update_User: 'suspended',
}

const companies: { [k: string]: string } = {
  Companies_list: 'id email name logo_url suspended createdAt',
  Companies: 'id email name logo_url suspended createdAt',
  create_Companies: 'id email name',
  CompaniesEvents:
    'id published createdAt updatedAt companyId title content title_en content_en image_url location_url status',
  update_Companies: 'logo_url suspended',
}

const events: { [k: string]: string } = {
  Event_list:
    'id published createdAt updatedAt companyId sectionId title content title_en content_en image_url location_url status Section {title title_en published}',
  Event:
    'id published createdAt updatedAt companyId sectionId title content title_en content_en image_url location_url status Section {title title_en published}',
  update_Event: 'published status',
}

const sections: { [k: string]: string } = {
  Section_list: 'id published  title  title_en createdAt updatedAt',
  Section: 'id published  title  title_en createdAt updatedAt',
  update_Section: 'published',
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
