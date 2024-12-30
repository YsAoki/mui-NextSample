"use client"
import { Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps } from "@mui/material"
import { FC } from "react"

type Props = Omit<FormControlLabelProps, "control"> & CheckboxProps

const CCheckBox: FC<Props> = ({ label, value, onChange, checked, ...other }) => {
  return <FormControlLabel label={label} control={<Checkbox value={value} onChange={onChange} checked={checked} />} {...other} />
}

export default CCheckBox
