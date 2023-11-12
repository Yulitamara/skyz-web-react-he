import React from "react";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, []);

  return (
    <>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h3 className="blog-title">{blog.title}</h3>
          <div className="img-container">
            <img src={blog.img} />
          </div>
          <p>{blog.short}</p>
        </div>
      ))}
    </>
  );
};

export default Blog;
