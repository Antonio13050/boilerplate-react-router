import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import User from "../pages/User";

import Layout from "../components/Layout";
import { PrivateRoutes } from "./PrivateRoutes";

export default function RoutesComponent() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoutes>
                        <Layout />
                    </PrivateRoutes>
                }
            >
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="user" element={<User />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    );
}
