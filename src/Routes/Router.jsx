import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Menu from "../Page/Main/Menu";
import Order from "../Page/Order/Order/Order";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Page/Dashboard/Cart/Cart";
import AllUsers from "../Page/Dashboard/AllUser/AllUser";

import AddItems from "../Page/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Page/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Page/Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: "signup",
                element: <SignUp></SignUp>,
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
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        children: [
            {
                path: "cart",
                element: <Cart></Cart>,
            },

            // admin only routes
            {
                path: "addItems",
                element: (
                    <AdminRoute>
                        <AddItems></AddItems>
                    </AdminRoute>
                ),
            },
            {
                path: "manageItems",
                element: <ManageItems></ManageItems>,
            },

            {
                path: "updateItem/:id",
                element: (
                    <AdminRoute>
                        <UpdateItem></UpdateItem>
                    </AdminRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/menu/${params.id}`),
            },

            // admin routes
            {
                path: "users",
                element: <AllUsers></AllUsers>,
            },
        ],
    },
]);
