import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-yellow-50 items-center justify-center flex font-extrabold shadow-md">
      <p className="blue-gradient_text">VD</p>
      </NavLink>
      <nav className="flex w-300 h-10 rounded-lg  bg-yellow-50 shadow-md text-xl gap-6 font-semibold">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-600': 'text-black'}>
         About
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-green-500': 'text-black'}>
         Projects
        </NavLink>
        <NavLink to="/education" className={({isActive}) => isActive ? 'text-yellow-500': 'text-black'}>
         Education
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-violet-500': 'text-black'}>
         Contact
        </NavLink>



      </nav>
    </header>
  )
}

export default Navbar
