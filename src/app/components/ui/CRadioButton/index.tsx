"use client"
import { FormControlLabel, FormControlLabelProps, Radio, RadioProps } from "@mui/material"
import { FC } from "react"

type Props = Omit<FormControlLabelProps, "control"> & RadioProps

const CRadioButton: FC<Props> = ({ label, value, onChange, checked, ...other }) => {
  return <FormControlLabel label={label} control={<Radio value={value} onChange={onChange} checked={checked} />} {...other} />
}

export default CRadioButton
