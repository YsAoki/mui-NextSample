"use client"
import { Paper, PaperProps } from "@mui/material"
import { FC } from "react"

type Props = PaperProps

const CPaper: FC<Props> = ({ children, ...other }) => {
  return (
    <Paper elevation={4} {...other}>
      {children}
    </Paper>
  )
}

export default CPaper
