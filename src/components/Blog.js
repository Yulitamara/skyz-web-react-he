
import React from "react";
import { Link } from "react-router-dom";

const getImageSrc = (p) =>
  !p ? "" : /^https?:\/\//i.test(p) ? p : `${process.env.PUBLIC_URL}${p.startsWith("/") ? p : `/${p}`}`;

const Blog = ({ blogs = [] }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          {/* היה /blog/...  ->  צריך /בלוג/...  ושווה להוסיף סלאש בסוף כדי להתאים לרוט */}
          <Link to={`/בלוג/${blog.url}/`}>
            <h3 className="blog-title">{blog.title}</h3>
            <div className="img-container">
              <img
                src={getImageSrc(blog.img)}
                alt={blog.title}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <p>{blog.short}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog;
