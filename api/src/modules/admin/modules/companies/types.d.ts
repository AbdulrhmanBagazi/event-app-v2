export type companiesType = {
  email: string;
  id: string;
  name: string;
  suspended: boolean;
  logo_url: string;
};

export type companiesTypeFilterType = {
  email: string;
  suspended: boolean;
};

export type eventFilterType = {
  published: boolean;
};
