import { NavLink } from "react-router"

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
      </nav>
    </header>
    
    
  )
}

export default Header
