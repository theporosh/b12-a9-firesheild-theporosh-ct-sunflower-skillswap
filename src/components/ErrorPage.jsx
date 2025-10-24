import React from 'react';
import errorImg from "../assets/error-404.png";
import Navbar from './Navbar';
import Footer from './Footer';

const ErrorPage = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="flex justify-center mx-auto">
                <img className="text-center" src={errorImg} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;