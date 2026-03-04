import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = () => {
      const admin = localStorage.getItem("isAdmin");
      setIsAdmin(admin === "true");
    };

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            উন্মাদনা'১৮
          </Link>
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/students" className="hover:text-blue-400 transition duration-300">
              Student Corner
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition duration-300">
              About Us
            </Link>
          </li>
        </ul>

        {/* Admin Button */}
        {!isAdmin && (
          <div className="hidden md:block">
            <Link to="/admin-login">
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-blue-500/50">
                Admin Login
              </button>
            </Link>
          </div>
        )}

        {/* Mobile Button */}
        <div className="md:hidden text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white shadow-lg">
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
                <Link to="/admin-login">
                  <button className="bg-blue-600 px-6 py-2 rounded-full">
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