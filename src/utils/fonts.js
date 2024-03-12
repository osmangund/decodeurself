import localFont from "next/font/local"
import { Manrope } from "next/font/google"

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})
export const dance = localFont({
  src: "../fonts/Dance.otf",
  variable: "--font-dance",
})
export const rumeur = localFont({
  src: "../fonts/Rumeur.otf",
  variable: "--font-rumeur",
})
