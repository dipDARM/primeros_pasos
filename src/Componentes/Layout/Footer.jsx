import { NavLink } from "react-router"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8  flex-col justify-between "  >
      <div className="flex items-center justify-between">
        <h1>0123456789</h1>
        <h2>Diego Rivera</h2>
        <h3>@example.com</h3>
      
          <NavLink to="/admin" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <img src="src/assets/silueta.png" alt="Logo" />
          </NavLink>
        </div>

    </footer>
  )
}

export default Footer