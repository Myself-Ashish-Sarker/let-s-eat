import { useContext } from "react";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
};

export default PrivateRouter