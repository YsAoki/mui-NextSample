"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { EMPTY_VALUE } from "../constants/formDefaultValues";

export const useSelect = (defaultValue: string = EMPTY_VALUE) => {
  const [select, setSelect] = useState(defaultValue);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const onChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  }, []);

  return [select, setSelect, onChangeSelect, validationMessage, setValidationMessage] as const;
};
