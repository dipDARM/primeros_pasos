import{useEffect, useState} from 'react'
import { NavLink } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

const ConAdmin = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  const undoDeleteProduct = id => {
    setProductos(prevProductos => {
      return prevProductos.map((p) => {
        if (p.id === id){
          p.estado = 'activo'
        }
        return p
      })
    })
  }

  const deleteProductForReal = id => {
    setProductos(prevProductos => {
      return prevProductos.filter((p) => p.id !== id)
    })
  }

  const deleteProduct = (producto) => {
    const nextStateProducts = productos.map((p) => {
      if (p.id === producto.id){
        p.estado = 'eliminado'
      }
      return p
    })
    setProductos(nextStateProducts)

    toast.info(UndoNotification, {
      onClose: (removedByUser)=>{
        if (!removedByUser) return

        deleteProductForReal(producto.id)
      },
      data: {
        onUndo: () => undoDeleteProduct(producto.id)
      }
    })
  }

  useEffect(()=>{
    fetch("http://localhost:3001/productos")
    .then(resultado => resultado.json())
    .then(data => {
      setProductos(data)
      setCargando(false)
    })
      console.log("productos",productos)
  },[])
  
  if(cargando) return <p className='items-center text-red-950'>cargando</p>
  return (
    <div className='max-w-md mx-auto mt-8 space-y-3'>
        {productos.map((producto) => (
          <div key={producto.id} className='flex justify-between items-center p-4 rounded-xl border border-gray shadow-sm hover:shadow-md transition'>
            <span className='font-medium text-gray-800'>
              {producto.nombre}
            </span>
            <span className='text-indigo-600 font-semibold'>
              ${producto.precio}
            </span>

            <NavLink to={`${producto.id}`} className="text-indigo-600 hover:text-indigo-800">
              Editar
            </NavLink>

            <button onClick={() => deleteProduct(producto)} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
              Eliminar
            </button>
          </div>
        ))}
        <div className='flex justify-center mt-4'>
          <NavLink to="agregar" className="text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded-md">
            Agregar
          </NavLink>
        </div>
        <ToastContainer closeButton={false} autoClose={10_000} />
    </div>
  )
}

function UndoNotification({
  closeToast,
  data,
}) {
  const handleUndo = () => {
    data.onUndo();
    closeToast(true);
  };

  return (
    <div className="flex items-center w-full">
      <span>Deleting Product</span>{' '}
      <button
        className="border border-purple-400 ml-auto px-2 rounded-md text-purple-400"
        onClick={handleUndo}
      >
        Undo
      </button>
    </div>
  );
}

export default ConAdmin