import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Nyitooldal from "./components/Nyitoolda";
import Eredmenyek from "./components/Eredmenyek";
import Login from "./components/Login";

function App() {

  const router = createBrowserRouter([
    {path:"/",element:<Nyitooldal></Nyitooldal>},
    {path:"/eredmenyek",element:<Eredmenyek></Eredmenyek>},
    {path:"/login",element:<Login></Login>}
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
