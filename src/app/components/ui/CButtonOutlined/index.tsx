"use client"

import { Button, ButtonProps } from "@mui/material"
import { FC } from "react"

type Props = ButtonProps
/**背景色塗りつぶしなしのボタン */
const CButtonOutlined: FC<Props> = ({ children, ...other }) => {
  return <Button variant="outlined">{children}</Button>
}

export default CButtonOutlined
