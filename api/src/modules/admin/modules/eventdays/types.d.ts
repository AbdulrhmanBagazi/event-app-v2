import { EventDaysStatus } from '@prisma/client';

export type eventdaysFilterType = {
  status: EventDaysStatus;
  companyId: string;
};

export type eventday = {
  id: string;
  date: Date;
};
