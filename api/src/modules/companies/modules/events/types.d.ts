export type eventFilterType = {
  published: boolean;
  status: EventStatus;
  sectionId: string;
};

export type eventType = {
  id: string;
  published: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
  companyId: string;
  sectionId: string;
  title: string;
  content: string;
  title_en: string;
  content_en: string;
  image_url: string;
  location_url: string;
  status: EventStatus;
};

export type update_Event = {
  status: EventStatus;
};
