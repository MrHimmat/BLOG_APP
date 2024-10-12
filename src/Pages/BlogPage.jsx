import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);

  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL is: ");
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error aagya in blog id wali call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

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
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      ) : blog ? (
        <div className="container  mx-auto p-4">
          <BlogDetails post={blog} />
          <h2 className="text-2xl font-bold mt-8 mb-4">Related Blogs</h2>
          <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {relatedblogs.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4  rounded shadow hover:shadow-lg transition"
              >
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold">No Blog Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
