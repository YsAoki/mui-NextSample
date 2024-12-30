"use client"
import { MenuItemType } from "@/app/types/formItem"
import { MenuItem, Select, SelectProps } from "@mui/material"
import { FC } from "react"

type Props = {
  menuItemList: MenuItemType[]
} & SelectProps

const CSelectBox: FC<Props> = ({ value, onChange, label, menuItemList, ...other }) => {
  return (
    <Select value={value} onChange={onChange} label={label} {...other}>
      {menuItemList.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.text}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CSelectBox
