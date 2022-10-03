import { Event_JobsStatus, Rate_type } from '@prisma/client';

export type eventjobsFilterType = {
  status: Event_JobsStatus;
  rate_type: Rate_type;
  eventId: string;
};

export type eventjob = {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  title: string;
  title_en: string;
  status: Event_JobsStatus;
  rate: number;
  rate_type: Rate_type;
  eventId: string;
};
