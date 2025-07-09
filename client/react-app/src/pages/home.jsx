// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../components/PostList"; 




const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
