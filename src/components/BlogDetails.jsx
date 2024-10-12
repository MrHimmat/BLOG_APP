import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="mt-12 p-6 flex flex-col w-[100%] bg-white shadow-md rounded-lg">
      <NavLink
        to={`/blog/${post.id}`}
        className="text-2xl font-bold text-blue-600 hover:underline"
      >
        <span>{post.title}</span>
      </NavLink>
      <p className="mt-2 text-gray-700  ">
        By <span className="font-semibold text-gray-900">{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className="text-blue-600 hover:underline"
        >
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p className="text-gray-500 text-sm">Posted on {post.date}</p>
      <p className="mt-4 text-gray-800 leading-relaxed">{post.content}</p>
      <div className="mt-4">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="inline-block text-blue-500 hover:text-blue-600 bg-gray-200 rounded-full px-3 mt-3 py-2 text-sm font-semibold mr-2"
          >
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
