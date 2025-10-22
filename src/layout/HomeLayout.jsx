import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <nav className="flex flex-col w-11/12 mx-auto my-5">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="flex-1 *:border w-11/12 mx-auto">
                <section className="main">
                    <Outlet></Outlet>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;