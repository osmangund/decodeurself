import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar/Navbar"
import { manrope, dance, rumeur } from "@/utils/fonts"

export const metadata: Metadata = {
  title: "Decode URSELF",
  description: "Decode yourself, enrichen your life.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${dance.variable} ${rumeur.variable} font-manrope font-light`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
