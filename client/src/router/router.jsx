// import { createBrowserRouter } from "react-router-dom";
// import Root from "../main/Root";
// import Home from "../components/Home/Home";
// import Category from "../components/Category/Category";
// import Login from "../pages/Login";
// import Registration from "../pages/Registration";
// import AccountDetails from "../pages/AccountDetails";
// import Dashboard from "../Dashboard/Dashboard";
// import useAdmin from "../hooks/useAdmin";
// import AdminProfile from "../Dashboard/AdminBoard/AdminProfile";
// import UserProfile from "../Dashboard/UserBoard/UserProfile";
// import UserOrder from "../Dashboard/UserBoard/UserOrder";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root></Root>,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />
//             },
//             {
//                 path: "/category",
//                 element: <Category />
//             },
//             {
//                 path: "/account-details",
//                 element: <AccountDetails />
//             },
//             {
//                 path: "/dashboard/*",
//                 element: <Dashboard />,
//                 children: [
//                     {
//                         path: "user-profile",
//                         element: <UserProfile />
//                     },
//                     {
//                         path: "user-order",
//                         element: <UserOrder />
//                     },
//                     {
//                         path: "admin-profile",
//                         element: <AdminProfile />
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         path: "/login",
//         element: <Login />
//     },
//     {
//         path: "/registration",
//         element: <Registration />
//     },

// ]);

// export default router;


import { createBrowserRouter } from 'react-router-dom';
import Root from '../main/Root';
import Home from '../components/Home/Home';
import Category from '../components/Category/Category';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import AccountDetails from '../pages/AccountDetails';
import Dashboard from '../Dashboard/Dashboard';
import AdminProfile from '../Dashboard/AdminBoard/AdminProfile';
import UserProfile from '../Dashboard/UserBoard/UserProfile';
import UserOrder from '../Dashboard/UserBoard/UserOrder';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category',
                element: <Category />
            },
            {
                path: '/account-details',
                element: <AccountDetails />
            },
            {
                path: '/dashboard/',
                element: <Dashboard />,
                children: [
                    {
                        path: 'user-profile',
                        element: <UserProfile />
                    },
                    {
                        path: 'user-order',
                        element: <UserOrder />
                    },
                    {
                        path: 'admin-profile',
                        element: <AdminProfile />
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/registration',
        element: <Registration />
    }
]);

export default router;