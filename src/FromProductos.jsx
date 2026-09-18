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
        <input type="text" value={producto?.nombre} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" value={producto?.precio} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  )
}

export default FromProductos