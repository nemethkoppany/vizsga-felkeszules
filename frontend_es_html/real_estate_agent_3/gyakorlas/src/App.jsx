import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Nyitoolda from "./compoenents/Nyitooldal";
import UjHirdetes from "./compoenents/UjHirdetes";
import Hirdetesek from "./compoenents/Hirdetesek";

function App() {
  
  const router = createBrowserRouter([
    {path:"/",element:<Nyitoolda></Nyitoolda>},
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
