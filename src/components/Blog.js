import React from "react";
import { Link } from "react-router-dom";

const getImageSrc = (p) =>
  !p ? "" : /^https?:\/\//i.test(p) ? p : `${process.env.PUBLIC_URL}${p.startsWith("/") ? p : `/${p}`}`;

// גוזר תקציר מתוך ה-HTML ב-content לפי מספר מילים
function getExcerpt(content, words = 30) {
  const html = Array.isArray(content) ? content.join("") : (content || "");
  // ממיר HTML לטקסט רגיל וגם מדמה דקוֹד של ישויות כמו &nbsp;
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = (doc.body.textContent || "").trim().replace(/\s+/g, " ");
  const tokens = text.split(" ");
  return tokens.length > words ? tokens.slice(0, words).join(" ") + "…" : text;
}

const Blog = ({ blogs = [], excerptWords = 20 }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/בלוג/${blog.url}/`}>
            <h3 className="blog-title">{blog.title}</h3>
            <div className="img-container">
              <img
                src={getImageSrc(blog.img)}
                alt={blog.title}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            {/* אם יש short נשתמש בו; אחרת נגזור מתוך content */}
            <p>{blog.short ? blog.short : getExcerpt(blog.content, excerptWords)}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog;
