import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';


const Navbar = () => {

  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    console.log("user trying to logout");
    logOut()
      .then(() => {
        toast.success("You Sign-out successful");
        // alert("You Sign-out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const links = (
    <>
      <li><NavLink className="text-green-600" to="/">Home</NavLink></li>
      {/* <li><NavLink className="text-green-600" to="">Explore Skills</NavLink></li> */}
      <li><NavLink className="text-green-600" to="/add-skill">Add Skill</NavLink></li>
      <li><NavLink className="text-green-600" to="/profile">My Profile</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">

      <div className="">{user && user.email}</div>

      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">SkillSwap</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        <img src={userIcon} alt="" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-neutral px-10">LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral px-10">Login</Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;
