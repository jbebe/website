import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (date: Date) => {
  return format(date, 'yyyy-MM-dd');
};

export const dateDistance = (date: Date) => {
  return formatDistanceToNow(date, { includeSeconds: false });
};
