import { Link } from "react-router-dom"
import Search from "../pages/Search";

export default function Header() {
  return (
    <header className="z-50 px-4 w-full h-14 bg-white fixed top-0">
      <nav className="w-full h-full flex items-center justify-between">
        <Link to='/' className="mr-auto">Home</Link>
        <Link to='/cocktails-by-letter' className="mr-4">Cocktail by letter</Link>
        <Link to='/cocktails-alcoholic' className="mr-4">Cocktail alcoholic</Link>
        <Search />
      </nav>
    </header>
  )
}