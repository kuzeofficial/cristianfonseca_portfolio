import { format, parseISO } from "date-fns";


export const formatDate = (date:any) =>
  format(parseISO(date), "MMMM d, yyyy")