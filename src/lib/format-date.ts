import { format, parseISO } from "date-fns";
import { en } from "date-fns/locale";

export const formatDate = (date:any) =>
  format(parseISO(date), "MMMM d, yyyy", {
    locale: en,
  });