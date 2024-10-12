import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // Fetch blog posts for the tag page
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      // Fetch blog posts for the category page
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      // Fetch blog posts for the home page
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen w-[50%] justify-center items-center mx-auto mt-20 mb-11 bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/tags/:tag" element={<TagPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
        </Routes>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
}
