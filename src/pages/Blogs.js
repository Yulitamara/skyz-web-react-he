// src/pages/Blogs.jsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import "../assets/scss/_blogs.scss";
import "../assets/scss/base.scss";
import Blog from "../components/Blog";
import Filters from "../components/Filters";

const Blogs = () => {
  const { t, i18n } = useTranslation();
  const isHe = (i18n.language || "").startsWith("he");
  const dir = isHe ? "rtl" : "ltr";

  const [searchParams, setSearchParams] = useSearchParams();

  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [blogData, setBlogData] = useState([]);

  // --- טעינת בלוגים לפי שפה ---
  useEffect(() => {
    const lng = isHe ? "he" : "en";
    import(`../data/blogs.${lng}.json`)
      .then((m) => {
        const raw = m.default?.blogs ?? [];
        const arr = Array.isArray(raw) ? raw : Object.values(raw);
        const normalized = arr.map((b) => ({
          ...b,
          content: Array.isArray(b.content) ? b.content.join("") : b.content,
        }));
        setBlogData(normalized);
      })
      .catch(() => setBlogData([]));
  }, [isHe]);

  // --- קריאה מה-URL: page ו-filter ---
  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
    setCurrentPage(Number.isFinite(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1);

    const filterParam = searchParams.get("filter");
    setSelectedFilters(filterParam ? filterParam.split(",").filter(Boolean) : []);
  }, [searchParams]);

  // --- עדכון ה-URL כשמשנים עמוד/פילטר ---
  const updateURL = (page, filters) => {
    const params = new URLSearchParams(searchParams);
    if (page > 1) params.set("page", String(page));
    else params.delete("page");

    if (filters && filters.length) params.set("filter", filters.join(","));
    else params.delete("filter");

    setSearchParams(params, { replace: true });
  };

  const goToPage = (p) => {
    setCurrentPage(p);
    updateURL(p, selectedFilters);
  };

  // --- סינון + פאג'ינציה ---
  const filteredBlogs =
    selectedFilters.length > 0
      ? blogData.filter(
          (blog) =>
            blog.filters && blog.filters.some((f) => selectedFilters.includes(f))
        )
      : blogData;

  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.max(1, Math.ceil(totalBlogs / blogsPerPage));

  const handleNextPage = () => goToPage(Math.min(currentPage + 1, totalPages));
  const handlePrevPage = () => goToPage(Math.max(currentPage - 1, 1));

  const handleSelectFilter = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1);
    updateURL(1, filters);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // אייקונים לפי כיוון
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
  const prevIcon = isHe ? "arrow_forward_ios" : "arrow_back_ios";
  const nextIcon = isHe ? "arrow_back_ios" : "arrow_forward_ios";

  return (
    <section dir={dir} className="blogs">
      <Helmet>
        <title>SkyzCRM</title>
        <meta name="description" content="אתר הבלוגים של Skyz CRM" />
        <link rel="canonical" href="/בלוג/" />
      </Helmet>

      <h1>Skyz Blog</h1>
      <p className="blogs-header-p">{t("blog-p")}</p>

      <Filters onSelectFilter={handleSelectFilter} />

      <div className="blogs-container">
        <Blog blogs={currentBlogs} />
      </div>

      <div className="pagination">
        <button
          className={`forward-btn ${prevDisabled ? "disabled" : ""}`}
          onClick={handlePrevPage}
          disabled={prevDisabled}
          aria-label={isHe ? "לעמוד הקודם" : "Previous page"}
        >
          <span className="material-symbols-outlined">{prevIcon}</span>
        </button>

        <span className="page-number">{`${currentPage} / ${totalPages}`}</span>

        <button
          className={`back-btn ${nextDisabled ? "disabled" : ""}`}
          onClick={handleNextPage}
          disabled={nextDisabled}
          aria-label={isHe ? "לעמוד הבא" : "Next page"}
        >
          <span className="material-symbols-outlined">{nextIcon}</span>
        </button>
      </div>
    </section>
  );
};

export default Blogs;
