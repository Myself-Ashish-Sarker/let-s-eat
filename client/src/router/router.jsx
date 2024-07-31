import { createBrowserRouter } from "react-router-dom";
import Root from "../main/Root";
import Home from "../components/Home/Home";
import Category from "../components/Category/Category";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category",
                element: <Category />
            },
            {}
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registration",
        element: <Registration />
    }
]);

export default router;