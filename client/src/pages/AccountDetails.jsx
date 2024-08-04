import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const AccountDetails = () => {

    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    // if there is no user, then send back to homepage
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);
    // if there is no user, then send back to homepage

    // getting user info from mongodb
    useEffect(() => {
        if (user) {
            const fetchUser =  async () => {
                try {
                    const res = await axiosPublic.get("users");
                    const loggedInUser = res.data.find(u => u.email === user.email);
                    setUserData(loggedInUser);
                    setLoading(false);
                } catch (error) {
                    setError(error)
                    setLoading(false);
                }
            }

            fetchUser();
        } else {
            setLoading(false);
        }
    }, [user, axiosPublic]);
    // getting user info from mongodb

    return (
        <div>
            {
                user ?
                    <>
                        {
                            loading ? <div>Loading...</div> :
                                error ? <div>Error: {error.message}</div> :
                                    userData && <>
                                        <div>
                                            <div className=''>
                                                <h1>User Name: {userData.name}</h1>
                                                <h1>Password: {userData.password}</h1>
                                                <h1>User Stats: {userData.status}</h1>
                                            </div>
                                        </div>
                                    </>
                        }
                    </>
                    :
                    <>
                        <></>
                    </>
            }
        </div>
    );
};

export default AccountDetails