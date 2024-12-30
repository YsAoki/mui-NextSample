"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { EMPTY_INPUT } from "../constants/formDefaultValues";

/**フォームの入力欄で使用するカスタムフック */
export const useInput = (defaultValue: string = EMPTY_INPUT) => {
  const [input, setInput] = useState(defaultValue);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return [input, setInput, onChangeInput, validationMessage, setValidationMessage] as const;
};
