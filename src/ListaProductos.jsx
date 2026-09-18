import{useEffect, useState} from 'react'

const ListaProductos = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
    fetch("http://localhost:3001/productos")
    .then(resultado => resultado.json())
    .then(data => {
      setProductos(data)
      console.log("data",data)
      setCargando(false)
    })
      console.log("productos",productos)
  },[])
  
  if(cargando) return <p className='items-center text-red-950'>cargando</p>
  return (
    <div className='max-w-md mx-auto mt-8 space-y-3'>
        {productos.map((producto) => (
          <li key={producto.id}
          className='flex justify-between items-center p-4 rounded-xl border border-gray shadow-sm hover:shadow-md transition'>
            <span className='font-medium text-gray-800'>
              {producto.nombre} 
            </span>
            <span className='text-indigo-600 font-semibold'>
              ${ producto.precio}
            </span>

                <a href={`http://localhost:3001/productos/${producto.id}`} className="text-indigo-600 hover:text-indigo-800">
            Editar
          </a>

          </li>
        ))}
    </div>
  )
}

export default ListaProductos