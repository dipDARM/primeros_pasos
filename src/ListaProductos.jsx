import{useEffect, useState} from 'react'

const ListaProductos = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
    fetch("/src/data/products.json")
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

          </li>
        ))}
    </div>
  )
}

export default ListaProductos