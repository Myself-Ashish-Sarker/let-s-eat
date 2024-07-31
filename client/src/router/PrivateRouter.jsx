import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h1>Wait Please....</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" />
};

export default PrivateRouter