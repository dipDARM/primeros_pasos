import React from 'react'
import { useState } from 'react'


const AgregarProducto = () => {

    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    })
  return (
    <div>
        <input type="text" placeholder='Nombre' onChange={(e) => setProducto({...producto, nombre: e.target.value})} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder='Precio' onChange={(e) => setProducto({...producto, precio: e.target.value})} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button onClick={() => {
            fetch(`http://localhost:3001/productos`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(producto)
            })
          }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Agregar
          </button>
    </div>
  )
}

export default AgregarProducto