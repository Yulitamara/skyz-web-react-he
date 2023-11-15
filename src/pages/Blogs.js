import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../assets/scss/_blogs.scss";
import "../assets/scss/base.scss";
import Blog from "../components/Blog";
import BlogData from "../data/BlogData";
import Filters from "../components/Filters";

const Blogs = () => {
  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredBlogs =
    selectedFilters.length > 0
      ? BlogData.filter(
          (blog) =>
            blog.filters &&
            blog.filters.some((filter) => selectedFilters.includes(filter))
        )
      : BlogData;

  const totalBlogs = filteredBlogs.length; // Update to get the total number of filtered blogs
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSelectFilter = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1); // Reset currentPage when changing filters
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  return (
    <section dir="rtl" className="blogs">
      <Helmet>
        <title>SkyzCRM</title>
        <meta name="description" content="אתר הבלוגים של Skyz CRM"></meta>
        <link rel="canonical" href="/בלוג"></link>
      </Helmet>
      <h1>Skyz Blog</h1>
      <p>
        ברוך בואכם לאתר הבלוגים של Skyz CRM. האתר כולל מאמרים מקצועיים, אשר
        יציידו אתכם במידע חיוני וטיפים מעניינים, בתחומי מכירות, שיווק, שירות,
        הצלחת לקוח ו- CRM (ניהול קשרי לקוחות). המאמרים יציגו לכם חידושים,
        ניתוחים ומגמות עולמיות לצורך התייעלות בכל אחד מתחומים חשובים אלו. נשמח
        מאוד אם תפיקו מאתר בלוגים זה את המיטב.
      </p>
      <Filters onSelectFilter={handleSelectFilter} />
      <div className="blogs-container">
        {currentBlogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <Link to={`/${blog.url}/`}>
              {/* Use Link to navigate to the individual blog page */}
              <h3 className="blog-title">{blog.title}</h3>
            </Link>
            <div className="img-container">
              <img src={blog.img} alt={blog.title} />
            </div>
            <p>{blog.short}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className={`forward-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        <span className="page-number">{`${currentPage} / ${totalPages}`}</span>
        <button
          className={`back-btn ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
      </div>
    </section>
  );
};

export default Blogs;


