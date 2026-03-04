import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide text-blue-400">
            উন্মাদনা'১৮
          </h2>

          <p className="text-gray-400 leading-relaxed">
            A platform dedicated to উন্মাদনা'১৮ to explore and find student profiles easily.
            Stay connected with student information and updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className="hover:text-blue-400 transition duration-300"
              >
                Student Corner
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition duration-300"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Information
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Chuadanga, Bangladesh <br />
            Email: 
            <span className="text-blue-400"> উন্মাদনা'১৮@gmail.com</span>
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2026 <span className="text-blue-400 font-semibold">উন্মাদনা'১৮</span>. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;