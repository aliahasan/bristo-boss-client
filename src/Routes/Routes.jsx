import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import MangeItems from "../Pages/DashBoard/MangeItems/MangeItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  // normal user routes ends here

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // only  admin routes
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItem></AddItem>,
          </AdminRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>,
          </AdminRoutes>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoutes>
            <MangeItems></MangeItems>
          </AdminRoutes>
        ),
      },
      {
        path: "updateitem/:id",
        element: (
          <AdminRoutes>
            <UpdateItem></UpdateItem>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
