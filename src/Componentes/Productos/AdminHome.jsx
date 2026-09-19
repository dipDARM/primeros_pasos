import React from 'react'
import { NavLink } from 'react-router'

const AdminHome = () => {
  return (
    <NavLink to="/admin/productos" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-md">
      Ir a Productos
    </NavLink> 
  )
}

export default AdminHome