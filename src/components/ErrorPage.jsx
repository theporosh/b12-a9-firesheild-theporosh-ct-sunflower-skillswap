// pages/ErrorPage.jsx
import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router";

const ErrorPage = ({ status = 404, message = "Page Not Found" }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
                <h1 className="text-6xl font-extrabold text-red-500 mb-4">{status}</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">{message}</h2>
                <p className="text-gray-600 mb-6">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
                >
                    Go to Home
                </Link>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;
