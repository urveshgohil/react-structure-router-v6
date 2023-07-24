import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, AuthLayout } from './layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                {/* WithoutLayout */}
                <Route path="/" element={<AuthLayout />} >
                    <Route index path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-in" element={<Navigate to="/" replace />} />
                </Route>
                {/* Layout */}
                <Route path="/" element={<Layout />} >
                    <Route index path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/home" element={<Navigate to="/home" replace />} />
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes;