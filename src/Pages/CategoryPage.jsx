import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <button
          onClick={() => navigation(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Back
        </button>
        <h2 className="text-3xl font-bold my-4">
          Blogs on <span className="text-blue-500 capitalize">{category}</span>
        </h2>
      </div>
      <div className="container w-[50%] mx-auto p-4">
        <Blogs />
      </div>
      <div className="container mx-auto p-4">
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryPage;
