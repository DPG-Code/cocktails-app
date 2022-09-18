import { Link } from "react-router-dom"
import Search from "../pages/Search";

export default function Header() {
  return (
    <header className="z-50 px-4 w-full h-14 bg-[#000000ce] backdrop-blur-sm absolute">
      <nav className="w-full h-full flex items-center justify-between">
        <Link
          to='/'
          className="mr-auto text-xs text-white font-semibold   sm:text-base"
        >
          Home</Link>
        <Link
          to='/cocktails-by-letter'
          className="mr-2 text-xs text-white font-semibold   sm:text-sm sm:mr-4"
        >
          letters
        </Link>
        <Link
          to='/cocktails-alcoholic'
          className="mr-2 text-xs text-white font-semibold   sm:text-sm sm:mr-4"
        >
          alcoholic
        </Link>
        <Search />
      </nav>
    </header>
  )
}