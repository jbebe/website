import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const formatDate = (date: Date) => {
  return format(date, 'yy-MM-dd');
};

export const dateDistance = (date: Date) => {
  return formatDistanceToNow(date, { includeSeconds: false });
};
