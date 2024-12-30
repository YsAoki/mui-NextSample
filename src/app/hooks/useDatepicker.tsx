"use client";
import { Dayjs } from "dayjs";
import { useCallback, useState } from "react";

export const useDatepicker = (defaultValue: Dayjs | null = null) => {
  const [date, setDate] = useState<Dayjs | null>(defaultValue);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const onChangeDate = useCallback((newDate: Dayjs | null) => {
    setDate(newDate);
  }, []);

  return [date, setDate, onChangeDate, validationMessage, setValidationMessage] as const;
};
