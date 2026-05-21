import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nyitooldal from "./components/Nyitoolda"
import Login from "./components/Login"
import Termekek from "./components/Termekek"
import {RouterProvider, createBrowserRouter} from "react-router-dom"


function App() {
 const router = createBrowserRouter([
  {path:"/",element:<Nyitooldal></Nyitooldal>},
  {path:"/termekek",element:<Termekek></Termekek>},
  {path:"/login",element:<Login></Login>}
 ])
  return (
<>
<RouterProvider router={router}></RouterProvider>
</>
  )
}

export default App
