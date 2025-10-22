import React from 'react';
import logo from "../assets/h_logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <img className="w-[300px]" src={logo} alt="" />
            <p className="text-accent">A Local Skill Exchange Platform</p>
            <p className="text-semibold text-accent">{format(new Date(), "EEE, MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;