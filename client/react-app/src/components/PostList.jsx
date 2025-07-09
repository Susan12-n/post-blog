import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center py-10 text-gray-500">No posts available.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white border rounded-xl shadow-md hover:shadow-lg transition duration-200 overflow-hidden"
        >
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <Link to={`/posts/${post._id}`}>
              <h2 className="text-xl font-semibold mb-2 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600 line-clamp-3">{post.content}</p>
            <p className="mt-2 text-sm text-gray-400">
              Category: {post.category?.name || post.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
