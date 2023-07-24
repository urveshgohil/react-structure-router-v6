import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Header />
            <main className="app-main d-flex flex-column flex-1">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
const AuthLayout = () => {
    return (
        <>
            <main className="app-main d-flex flex-column flex-1">
                <Outlet />
            </main>
        </>
    )
}
export { Layout, AuthLayout };