export const orderByDate = (prev: any, current: any) =>
  <any>new Date(current.date) - <any>new Date(prev.date);
