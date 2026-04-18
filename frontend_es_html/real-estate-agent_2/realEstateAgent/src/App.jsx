import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Nyitooldal from "./components/Nyitooldal"
import UjHirdetes from "./components/UjHirdetes"
import Hirdetesek from "./components/Hirdetesek"

function App() {


  const router = createBrowserRouter([
    {path:"/",element:<Nyitooldal></Nyitooldal>},
    {path:"/offers",element:<Hirdetesek></Hirdetesek>},
    {path:"/newad",element:<UjHirdetes></UjHirdetes>}
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
