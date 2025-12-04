import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../pages/Loading';


const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                {/* <Header></Header> */}
                {import.meta.env.VITE_name}
                <nav className="flex flex-col mx-auto my-5">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="flex-1 mx-auto">
                <section className="main">
                    {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;