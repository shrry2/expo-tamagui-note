import { format } from 'date-fns';

export const formatDate = (date: Date | number) => {
  date = typeof date === 'number' ? new Date(date) : date;
  return format(date, 'yyyy-MM-dd HH:mm:ss');
};
