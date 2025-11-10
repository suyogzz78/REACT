import { Link } from "react-router-dom";
import Logo from "../Logo";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  bg-gray-900 text-white py-10 border-t border-gray-700">
      {/* Centered content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between flex-wrap">

        {/* Left Section: Logo + Copyright */}
        <div className="w-full md:w-1/2 lg:w-5/12 mb-6 md:mb-0">
          <div className="flex flex-col justify-between h-full">
            <Logo width="100px" />
            <p className="text-sm text-gray-400 mt-4">
              &copy; {currentYear} MyApp. All rights reserved.
            </p>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="w-full md:w-1/2 lg:w-2/12 mb-6 md:mb-0">
          <h3 className="text-gray-500 text-xs uppercase mb-4">Pages</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="w-full lg:w-3/12">
          <h3 className="text-gray-500 text-xs uppercase mb-4">Contact</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">Email: contact@myapp.com</li>
            <li className="mb-2">Phone: +1 234 567 890</li>
            <li>Address: 123 React Street, JS City</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
