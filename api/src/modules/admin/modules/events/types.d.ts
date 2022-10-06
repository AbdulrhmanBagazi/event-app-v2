export type eventFilterType = {
  published: boolean;
  status: EventStatus;
  locationId: string;
};

export type eventType = {
  id: string;
  published: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
  companyId: string;
  locationId: string;
  title: string;
  content: string;
  title_en: string;
  content_en: string;
  image_url: string;
  location_url: string;
  status: EventStatus;
  app_sectionId: string;
  details: [{ title: string; content: string }];
  details_en: [{ title: string; content: string }];
};
