import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const Navbar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/categories");
      console.log("Fetched categories:", res.data);
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  fetchCategories();
}, []); 
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
         {categories.map((category) => (
  <Link
    key={category._id}
    to={`/category/${category._id}`}
    className="px-2 text-sm hover:text-blue-500"
  >
    {category.name}
  </Link>
))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

