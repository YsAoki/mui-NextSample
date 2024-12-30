"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

type Props = TextFieldProps;

const CTextField: FC<Props> = ({ value, onChange, label, ...other }) => {
  return <TextField value={value} onChange={onChange} label={label} {...other} />;
};

export default CTextField;
