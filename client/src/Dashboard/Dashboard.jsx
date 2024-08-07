import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const { isAdmin, loading } = useAdmin();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {
                isAdmin ?
                    <Navigate to="/dashboard/admin-profile" replace />
                    :
                    <Navigate to="/dashboard/user-profile" replace />
            }
            <Outlet />
        </>
    );
};

export default Dashboard;