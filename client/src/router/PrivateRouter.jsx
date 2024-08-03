import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);

    if (loading) {
        return <h1>Wait Please....</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace />
};

export default PrivateRouter