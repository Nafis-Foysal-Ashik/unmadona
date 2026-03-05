import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    setIsAdmin(admin === "true");
  }, []);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white sticky top-0 z-50 shadow-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-blue-400 transition"
        >
          উন্মাদনা'১৮
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-lg font-medium">

          <li className="relative group">
            <Link to="/">Home</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link to="/students">Student Corner</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link to="/about">About Us</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

        </ul>

        {/* Admin Login Button */}
        {!isAdmin && (
          <Link to="/admin-login" className="hidden md:block">
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold 
              bg-white/10 backdrop-blur-md border border-white/20 
              hover:bg-blue-600 hover:border-blue-500 
              transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40"
            >
              {/* <FaSignInAlt /> */}
              Admin Login
            </button>
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/students" onClick={() => setMenuOpen(false)}>
                Student Corner
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>

            {!isAdmin && (
              <li>
                <Link to="/admin-login" onClick={() => setMenuOpen(false)}>
                  <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition">
                    {/* <FaSignInAlt /> */}
                    Admin Login
                  </button>
                </Link>
              </li>
            )}

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;