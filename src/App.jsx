import{useEffect, useState} from 'react'

const App = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
    fetch("/src/data/products.json")
    .then(resultado => resultado.json())
    .then(data => {
      setProductos(data)
      console.log("data",data)
    })
      console.log("productos",productos)
  },[])
  
  return (
    <div className='max-w-md mx-auto mt-8 space-y-3'>
        
    </div>
  )
}

export default App