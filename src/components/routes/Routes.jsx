import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddToy from "../pages/AddToy";
import MyToys from "../pages/MyToys";
import EditToy from "../pages/EditToy";
import Alltoys from "../pages/Alltoys";
import Blogs from "../pages/Blogs";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../pages/Details";

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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allToys",
        element: <Alltoys></Alltoys>,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/detalis/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toy/details/${params.id}`),
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
