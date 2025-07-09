import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from "../services/api"; 


const PostForm = () => {
  const { id } = useParams(); // Gets post ID from URL
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setForm({ title: res.data.title, content: res.data.content });
      } catch (err) {
        console.error('Failed to fetch post:', err);
      }
    };

    if (id) fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/posts/${id}`, form);
      navigate('/');
    } catch (err) {
      console.error('Failed to update post:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Post Title"
          className="border border-gray-300 px-4 py-2 w-full rounded"
          required
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Post Content"
          className="border border-gray-300 px-4 py-2 w-full rounded h-40"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
