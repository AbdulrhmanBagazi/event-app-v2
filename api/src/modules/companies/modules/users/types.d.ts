export type userType = {
  email: string;
  id: string;
  verfied: boolean;
  suspended: boolean;
  postsCount: number;
};

export type userFilterType = {
  email: string;
  verfied: boolean;
  suspended: boolean;
};

export type postFilterType = {
  published: boolean;
};
