import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";

import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/Home/Home/Product-Details/ProductDetails";
import DashboardLayout from "../Layout/dashboard/DashboardLayout";
import AddProducts from "../Pages/dashboard/Manager/AddProducts";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import MyOrders from "../Pages/dashboard/Buyer/MyOrders";
import ManageOrders from "../Pages/dashboard/Manager/ManageOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-products",
        Component: AllProducts,
      },
      {
        path: "/payment-success",
        Component: PaymentSuccess,
      },
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <PrivateRoute>
            <ManageOrders></ManageOrders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
