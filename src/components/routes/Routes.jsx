import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddToy from "../pages/AddToy";
import MyToys from "../pages/MyToys";
import EditToy from "../pages/EditToy";

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
      },
      {
        path: "/toy/edit/:id",
        element: <EditToy></EditToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toy/edit/${params.id}`),
      },
    ],
  },
]);

export default router;
