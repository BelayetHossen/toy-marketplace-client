import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddToy from "../pages/AddToy";
import MyToys from "../pages/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/myToys/:email",
        element: <MyToys></MyToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myAllToys/${params.email}`),
      },
    ],
  },
]);

export default router;
