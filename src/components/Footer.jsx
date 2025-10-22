import React from "react";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center md:text-left">

        {/* Brand Section */}
        <aside className="flex-1">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
            SkillSwap
          </h2>
          <p className="text-sm mt-2">
            Empowering communities to share and learn together.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} SkillSwap. All rights reserved.
          </p>
        </aside>

        {/* Navigation Links */}
        <nav className="flex-1">
          <h6 className="text-lg font-semibold mb-3">Explore</h6>
          <ul className="flex flex-col md:flex-row md:gap-6 gap-2">
            <li><a className="hover:text-[#9f62f2]">About</a></li>
            <li><a className="hover:text-[#9f62f2]">Skills</a></li>
            <li><a className="hover:text-[#9f62f2]">Contact</a></li>
           </ul>
        </nav>

        {/* Legal Section */}
        <nav className="flex-1">
          <h6 className="text-lg font-semibold mb-3">Legal</h6>
          <ul className="flex flex-col gap-2">
            <li><a className="hover:text-[#9f62f2]">Terms of use</a></li>
            <li><a className="hover:text-[#9f62f2]">Privacy policy</a></li>
            <li><a className="hover:text-[#9f62f2]">Cookie policy</a></li>
          </ul>
        </nav>

        {/* Social Links */}
        <nav className="flex-1">
          <h6 className="text-lg font-semibold mb-3">Social</h6>
          <div className="flex justify-center md:justify-start gap-5">
            {/* Twitter */}
            <a className="hover:text-[#9f62f2] transition-colors">
             <FaXTwitter />
            </a>
            {/* YouTube */}
            <a className="hover:text-[#9f62f2] transition-colors">
              <FaYoutube />
            </a>
            {/* Facebook */}
            <a className="hover:text-[#9f62f2] transition-colors">
              <FaFacebook />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
