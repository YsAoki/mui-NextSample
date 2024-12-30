"use client"

import { ThemeProvider } from "@mui/material"
import { FC, PropsWithChildren } from "react"
import { theme } from "./themePalette"

const ClientThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ClientThemeProvider

// 1. Material-UI (@mui/material) の制約
// Material-UI の ThemeProvider は、ブラウザ側で動的にスタイルを適用するため、クライアントサイドで動作する必要があります。
// サーバー側では、ThemeProvider によるスタイルの適用が無効になります。
// 2. 状態管理の可能性
// ThemeProvider は内部で状態を管理している可能性があり、その動作はクライアントサイドでしか有効ではありません。
// 3. サーバーで動的な関数を渡せない
// Material-UI の theme オブジェクトには breakpoints.up のような動的な関数が含まれており、サーバーからクライアントに直接渡すことができません。
