import ListaProductos from './Componentes/Productos/ListaProductos'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Componentes/Layout/MainLayout'
import FromProductos from './Componentes/Productos/FromProductos'
import AgregarProducto from './Componentes/Productos/AgregarProducto'
import AdminHome from './Componentes/Productos/AdminHome'
import ConAdmin from './Componentes/Productos/ConAdmin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {index: true, element: <ListaProductos/>},
      {path: '/nosotros', element: <h1>componente Nosotros</h1>},
      {path: '*', element: <h1>404 No Encontrado</h1>}
    ]
  },
  {
    path: '/admin',
    element: <MainLayout/>,
    children:[
      {index: true, element: <AdminHome/>},
      {path: 'productos', element: <ConAdmin/>},
      {path: 'productos/:id', element: <FromProductos/>},
      {path: 'productos/agregar', element: <AgregarProducto/>}
    ]
  }
])

const App = () => <RouterProvider router={router}/>
  

export default App