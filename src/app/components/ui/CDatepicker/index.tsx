"use client"

import { DatePicker, DatePickerProps } from "@mui/x-date-pickers"
import { Dayjs } from "dayjs"
import { FC } from "react"

type Props = DatePickerProps<Dayjs>

const CDatepicker: FC<Props> = ({ value, onChange, label, ...other }) => {
  return <DatePicker value={value} onChange={onChange} label={label} {...other} />
}

export default CDatepicker
