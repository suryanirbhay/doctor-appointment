import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img onClick={() => navigate("/")} className="w-44 cursor-pointer" src={assets.logo} alt="" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li>
          <NavLink to="/" activeClassName="text-primary">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/doctors" activeClassName="text-primary">ALL DOCTORS</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="text-primary">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="text-primary">CONTACT</NavLink>
        </li>
      </ul>

      {/* Profile & Authentication */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            {/* Profile Dropdown */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate("/login")} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
            Create account
          </button>
        )}

        {/* Mobile Menu Button */}
        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />

        {/* Mobile Menu */}
        {showMenu && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 transition-all">
            {/* Close Button */}
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="" />
              <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
            </div>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
              <li><NavLink  to="/" onClick={() => setShowMenu(false)}> <p className='px-4 py-2 rounded  inline-block'>Home</p></NavLink></li>
              <li><NavLink   to="/doctors" onClick={() => setShowMenu(false)}> <p className='px-4 py-2 rounded  inline-block'>ALL DOCTORS</p></NavLink></li>
              <li><NavLink  to="/about" onClick={() => setShowMenu(false)}> <p className='px-4 py-2 rounded  inline-block'>ABOUT</p></NavLink></li>
              <li><NavLink  to="/contact" onClick={() => setShowMenu(false)}> <p className='px-4 py-2 rounded  inline-block'>CONTACT</p></NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
