import "bootstrap/dist/css/bootstrap.min.css"
import Nyitooldal from "./components/Nyitooldal"
// import UjHirdetes from "./components/uj-hirdetes"
import Hirdetesek from "./components/Hirdetesek"
import UjHirdetesek from "./components/uj-hirdetesek"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
function App() {

  const router = createBrowserRouter([
    {path:"/",element:<Nyitooldal></Nyitooldal>},
    {path:"/hirdetesek",element:<Hirdetesek></Hirdetesek>},
    {path:"/uj-hirdetes",element:<UjHirdetesek></UjHirdetesek>}
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
