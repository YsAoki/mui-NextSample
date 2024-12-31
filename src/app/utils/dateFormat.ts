import { Dayjs } from "dayjs";

const DAY_LIST = ["日", "月", "火", "水", "木", "金", "土"] as const;

/**dayjsオブジェクトから曜日の文字列を返却する */
export const getDayString = (date: Dayjs): string => {
  const index = date.day();
  return DAY_LIST[index];
};

export const formatYYYYMMDDWithSlash = (date: Dayjs | null | undefined): string | null => {
  if (!date) return null;
  if (!date.isValid()) return null;
  return date.format("YYYY/MM/DD");
};

export const formatYYYYMMDDWithHyphen = (date: Dayjs | null | undefined): string | null => {
  if (!date) return null;
  if (!date.isValid()) return null;
  return date.format("YYYY-MM-DD");
};
