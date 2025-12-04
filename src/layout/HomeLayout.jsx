import React from 'react';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../pages/Loading';


const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>

            {/* <Header></Header> */}
            {import.meta.env.VITE_name}
            <div className="sticky top-0 z-50 w-11/12 mx-auto">
                <Navbar></Navbar>
            </div>


            <main className="flex-1 w-11/12 mx-auto">
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