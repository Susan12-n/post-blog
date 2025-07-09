import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPosts = () => {
  const { id } = useParams(); // category ID from URL
  const [posts, setPosts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts by category
        const res = await axios.get(`http://localhost:5001/api/posts/category/${id}`);
        setPosts(res.data);

        // Optional: fetch category name separately
        const catRes = await axios.get("http://localhost:5001/api/categories");
        const category = catRes.data.find((c) => c._id === id);
        if (category) setCategoryName(category.name);
      } catch (err) {
        console.error("Error fetching category posts:", err);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Posts in Category: {categoryName || "Loading..."}
      </h2>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts found.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <li key={post._id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.content.slice(0, 100)}...</p>
              <p className="text-xs mt-2 text-right italic text-gray-500">
                by {post.author}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryPosts;
