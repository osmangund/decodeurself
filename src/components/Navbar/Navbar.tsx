import Link from "next/link"
import { SearchIcon } from "@/icons/Search"
import { AccountIcon } from "@/icons/Account"

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full p-6 md:p-8 *:font-rumeur">
      <Link href="/" className="spacing font-bold tracking-wide">
        <span className="text-center">DECODE</span>
        <span className=" text-center">URSELF</span>
      </Link>
      <ul className="flex items-center gap-4  *:text-xl">
o        <li className="mx-2 md:mx-4 hover:scale-105 text-lime-100 transition-transform">
          <a className="" href="/">
            letters
          </a>
        </li>
        <li className="mx-2 md:mx-4 hover:scale-105 text-sky-200 transition-transform">
          <a href="/courses">courses</a>
        </li>
        <li className="w-16 border py-1 pr-48 px-2 cursor-pointer items-start">
          <SearchIcon />
        </li>
        <li className="cursor-pointer hover:scale-105 transition-transform">
          <AccountIcon width="48px" height="48px" />
        </li>
      </ul>
    </nav>
  )
}
