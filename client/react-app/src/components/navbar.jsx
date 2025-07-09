import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-end">
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/create" className="hover:text-yellow-400">Create Post</Link>
          </li>
          <li>
            <Link to="/postform" className="hover:text-yellow-400">Post Form</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

