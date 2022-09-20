export type eventFilterType = {
  published: boolean;
  status: EventStatus;
};

export type userProfileType = {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  userId: string;
  firstName: string;
  lastName: string;
  nationality: string;
  nationalID: string;
  dateOfBirth: string;
};

export type createUserProfile = {
  firstName: string;
  lastName: string;
  nationality: string;
  nationalID: string;
  dateOfBirth: string;
};
