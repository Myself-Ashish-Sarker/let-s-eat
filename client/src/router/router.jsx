import { createBrowserRouter } from "react-router-dom";
import Root from "../main/Root";
import Home from "../components/Home/Home";
import Category from "../components/Category/Category";

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
]);

export default router;