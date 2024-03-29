import { EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';

export const distinctStartDates = (schedules?: Maybe<EventScheduleEntity>[]): Date[] | undefined => 
  schedules?.reduce((result, current) => {
    const startDate = new Date(current?.startDate);
    !result.find(date => date.toDateString() === startDate.toDateString()) 
      && result.push(startDate);

    return result;
  }, [] as Date[])