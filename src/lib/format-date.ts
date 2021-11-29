import { format, parseISO } from "date-fns";

type DateFormat =
  | "yyyy-MM-dd"
  | "yyyy-MM-dd HH:mm:ss"
  | "yyyy-MM-dd HH:mm:ss.SSS";
export const formatDate = (date: DateFormat) =>
  format(parseISO(date), "MMMM d, yyyy");
