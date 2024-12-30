"use client"

import { ThemeProvider } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import "dayjs/locale/de"
import { FC, PropsWithChildren } from "react"
import { theme } from "../../theme"

type Props = PropsWithChildren

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  )
}

export default AppProvider
