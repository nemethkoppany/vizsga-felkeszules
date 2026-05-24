import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Nyitooldal from "./components/Nyitooldal";
import NewAd from "./components/Newad";
import Offers from "./components/Offers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nyitooldal></Nyitooldal>,
    },
    {
      path: "/offers",
      element: <Offers></Offers>,
    },
    { path: "/newad", element: <NewAd></NewAd> },
  ]);

  return (<>
  <RouterProvider router={router}></RouterProvider>
  </>);
}

export default App;
