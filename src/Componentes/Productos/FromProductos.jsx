import { useParams } from "react-router"
import { useEffect, useState } from "react"



const FromProductos = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

useEffect(()=>{
    fetch(`http://localhost:3001/productos/${id}`)
    .then(resultado => resultado.json())
    .then(data => {
      setProducto(data)
    })

},[])  

  return (
    <div>
        <input type="text" value={producto?.nombre} onChange={(e) => setProducto({...producto, nombre: e.target.value})} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" value={producto?.precio} onChange={(e) => setProducto({...producto, precio: e.target.value})} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <div>
          <button onClick={() => {
            fetch(`http://localhost:3001/productos/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(producto)
            })
          }} className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700" >Guardar</button>

          <button onClick={() => {
            fetch(`http://localhost:3001/productos/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(producto)
            })
          }} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700" >Eliminar</button>
        </div>

    </div>
    



  )
}

export default FromProductos