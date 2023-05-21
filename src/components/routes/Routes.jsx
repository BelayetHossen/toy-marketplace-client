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
import NotFound from "../pages/NotFound";

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
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
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
          fetch(
            `https://assignment-11-server-belayethossen.vercel.app/toy/details/${params.id}`
          ),
      },
      {
        path: "/toy/edit/:id",
        element: (
          <PrivateRoutes>
            <EditToy></EditToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-belayethossen.vercel.app/toy/edit/${params.id}`
          ),
      },
      // {
      //   path: "/*",
      //   element: <NotFound></NotFound>,
      // },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
