"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { EMPTY_VALUE } from "../constants/formDefaultValues";

/**ラジオボタンで使用するカスタムフック */
export const useRadio = (defaultValue: string = EMPTY_VALUE) => {
  const [radio, setRadio] = useState<string>(defaultValue);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const onChangeRadio = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  }, []);

  return [radio, setRadio, onChangeRadio, validationMessage, setValidationMessage] as const;
};
