import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Nyitooldal from "./components/Nyitooldal";
import Login from "./components/Login";
import Versenyzok from "./components/Versenyzok";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Nyitooldal></Nyitooldal> },
    { path: "/eredmenyek", element: <Versenyzok></Versenyzok> },
    { path: "/login", element: <Login></Login> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
