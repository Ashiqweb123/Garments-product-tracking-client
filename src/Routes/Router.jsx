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

import Profile from "../Pages/dashboard/Common/Profile";
import ManageUsers from "../Pages/dashboard/Admin/ManageUsers";
import ManagerRequest from "../Pages/dashboard/Admin/ManagerRequest";
import ManagerRoute from "./ManagerRoute";
import AdminRoute from "./AdminRoute";
import ManageProducts from "../Pages/dashboard/Manager/ManageProducts";
import PendingOrder from "../Pages/dashboard/Manager/PendingOrder";
import AllOrders from "../Pages/dashboard/Admin/AllOrders";
import Error from "../Pages/Error";
import AboutUs from "../Pages/About-us/AboutUs";
import ContactUs from "../Pages/Contact/ContactUs";

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
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/all-products",
        Component: AllProducts,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "/payment-success",
        Component: PaymentSuccess,
      },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
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
            <ManagerRoute>
              <AddProducts></AddProducts>
            </ManagerRoute>
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
        path: "manage-products",
        element: (
          <PrivateRoute>
            <ManagerRoute>
              <ManageProducts></ManageProducts>
            </ManagerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "pending-orders",
        element: (
          <PrivateRoute>
            <ManagerRoute>
              <PendingOrder></PendingOrder>
            </ManagerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-orders",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllOrders></AllOrders>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manager-request",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManagerRequest></ManagerRequest>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
