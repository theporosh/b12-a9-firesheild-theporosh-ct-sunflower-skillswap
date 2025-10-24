import React, { useContext } from "react";
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("You signed out successfully"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li><NavLink className="text-green-600" to="/">Home</NavLink></li>
      <li><NavLink className="text-green-600" to="/add-skill">Add Skill</NavLink></li>
      <li><NavLink className="text-green-600" to="/profile">My Profile</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">

      {/* <div className="">{user && user.email}</div> */}

      {/* Left side (Logo + Dropdown on mobile) */}
      <div className="navbar-start">
        {/* Mobile dropdown menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text ml-2"
        >
          SkillSwap
        </Link>
      </div>

      {/* Center links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side (User + Login/Logout) */}
      <div className="navbar-end flex items-center gap-5">
        <div className="tooltip tooltip-bottom" data-tip={user ? user.displayName : "Guest"}>
          <img
            className="w-12 h-12 rounded-full border-2 border-[#632ee3] cursor-pointer"
            src={user ? user.photoURL : userIcon}
            alt="User"
          />
        </div>

        {user ? (
          <button onClick={handleLogOut} className="btn btn-neutral px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
