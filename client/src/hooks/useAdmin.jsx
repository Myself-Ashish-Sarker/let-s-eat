// import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
// import useAxiosPublic from './useAxiosPublic';

// const useAdmin = () => {

//     const {user} = useContext(AuthContext);

//     const axiosPublic = useAxiosPublic();

//     const [isAdmin, setIsAdmin] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (user) {
//             const fetchUser = async () => {
//                 try {
//                     const res = axiosPublic.get("users");
//                     const loggedInUser = res.data.find(u => u.email === user.email);
//                     if (loggedInUser && loggedInUser.status === "admin") {
//                         setIsAdmin(true);
//                     }
//                 } catch (error) {
//                     setLoading(false);
//                     setError(error);
//                 }
//             }

//             fetchUser();
//         } else {
//             setLoading(false);
//         }
//     }, [user, axiosPublic]);



//     return { isAdmin, loading, error };
// };

// export default useAdmin


import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosPublic from './useAxiosPublic';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            const fetchUser = async () => {
                try {
                    const res = await axiosPublic.get("/users");
                    const loggedInUser = res.data.find(u => u.email === user.email);
                    if (loggedInUser && loggedInUser.status === "admin") {
                        setIsAdmin(true);
                    }
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchUser();
        } else {
            setLoading(false);
        }
    }, [user, axiosPublic]);

    return { isAdmin, loading, error };
};

export default useAdmin;
