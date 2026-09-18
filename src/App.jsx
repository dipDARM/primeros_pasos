import ListaProductos from './ListaProductos'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout'
import FromProductos from './FromProductos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {index: true, element: <ListaProductos/>},
      {path: '/nosotros', element: <h1>componente Nosotros</h1>},
      {path: '*', element: <h1>404 No Encontrado</h1>},
      {path: '/productos/:id', element: <FromProductos/>},
    ]
  }
])

const App = () => <RouterProvider router={router}/>
  

export default App