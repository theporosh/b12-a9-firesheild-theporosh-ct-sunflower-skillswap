import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <nav className="min-h-screen flex flex-col my-3">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                
                <section className="nav"></section>
                <section className="main">
                    outlet
                </section>
                <section className="hero"></section>
            </main>
        </div>
    );
};

export default HomeLayout;