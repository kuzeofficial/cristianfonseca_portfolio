export const orderByDate = (prev:any, current: any) =>
  new Date(current.date) - new Date(prev.date);