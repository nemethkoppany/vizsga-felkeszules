import { RouterProvider,createBrowserRouter } from 'react-router'
import './App.css'
import Nyitooldal from './components/Nyitooldal'
import Login from './components/Login'
import Versenyzok from './components/Versenyzok'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  const router = createBrowserRouter([
    {path:"/",element:<Nyitooldal></Nyitooldal>},
    {path:"/versenyzok",element:<Versenyzok></Versenyzok>},
    {path:"/login",element:<Login></Login>}
  ])

  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App
