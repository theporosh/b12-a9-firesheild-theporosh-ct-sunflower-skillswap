import React from 'react';
import { Link, NavLink } from 'react-router';



const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/skills">Explore Skills</NavLink></li>
      <li><NavLink to="/add-skill">Add Skill</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">SkillSwap</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
