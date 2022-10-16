import { Event_ShiftsStatus } from '@prisma/client';

export type eventshiftsFilterType = {
  status: Event_ShiftsStatus;
  eventId: string;
  companyId: string;
};

export type eventshift = {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  start_time: string;
  end_time: string;
  status: Event_ShiftsStatus;
  eventId: string;
  companyId;
};
