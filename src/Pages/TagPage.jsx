import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

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
          Blogs Tagged <span className="text-blue-500 w-[30%]">#{tag}</span>
        </h2>
      </div>
      <div className="container mx-auto p-4">
        <Blogs />
      </div>
      <div className="container mx-auto p-4">
        <Pagination />
      </div>
    </div>
  );
};

export default TagPage;
