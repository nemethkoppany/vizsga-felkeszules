import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Nyitooldal from "./components/Nyitooldal";
import UjIngatlan from "./components/UjIngatlan";
import Hirdetesek from "./components/Hirdetesek";

function App() {

  const router = createBrowserRouter([
    {path:"/",element:<Nyitooldal></Nyitooldal>},
    {path:"/offers",element:<Hirdetesek></Hirdetesek>},
    {path:"/newad",element:<UjIngatlan></UjIngatlan>}
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
