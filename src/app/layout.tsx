import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "reset-css"
import "./globals.css"
import ClientThemeProvider from "./theme"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "MY SCHEDULE",
  description: "Next JSで作成されたスケジュールアプリケーションです"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  )
}
