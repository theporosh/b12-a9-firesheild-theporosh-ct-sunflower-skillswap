
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <header>
               
                <nav className="flex flex-col mx-auto my-5">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="flex-1 w-11/12 mx-auto">
                
                   <Outlet></Outlet>
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;