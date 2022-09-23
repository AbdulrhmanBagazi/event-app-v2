export type userType = {
  email: string;
  id: string;
  verfied: boolean;
  suspended: boolean;
};

export type userFilterType = {
  email: string;
  verfied: boolean;
  suspended: boolean;
};

export type update_User = {
  suspended: boolean;
};
