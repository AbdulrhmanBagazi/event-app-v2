const events: { [k: string]: string } = {
  Event_list:
    'id published createdAt updatedAt title content title_en content_en image_url location_url status Section {title title_en published}',
  Event:
    'id published createdAt updatedAt title content title_en content_en image_url location_url status Section {title title_en published}',
  update_Event: 'status',
}

const sections: { [k: string]: string } = {
  Section_list: 'id published  title  title_en',
  Section: 'id published  title  title_en',
  Section_getMany: 'id published title  title_en',
}

const Fileds: { [k: string]: string } = {
  ...events,
  ...sections,
}

export default Fileds
