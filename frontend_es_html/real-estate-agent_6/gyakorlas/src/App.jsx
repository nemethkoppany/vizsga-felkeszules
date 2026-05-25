import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Nyitooldal from "./components/Nyitooldal"
import Hirdetesek from "./components/Hirdetesek"
import UjHirdetes from "./components/UjHirdetes"

function App() {

const token = createBrowserRouter([
  {path:"/",element:<Nyitooldal></Nyitooldal>},
  {path:"/hirdetesek",element:<Hirdetesek></Hirdetesek>},
  {path:"/UjHirdetes",element:<UjHirdetes></UjHirdetes>}
]) 

  return (
    <>
     <RouterProvider router={token}></RouterProvider>
    </>
  )
}

export default App
