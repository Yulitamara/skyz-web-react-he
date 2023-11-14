// OpenBlog.js
import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../data/BlogData";

const OpenBlog = () => {
  const { id } = useParams();
  const blog = BlogData.find((blog) => blog.id === parseInt(id, 10));

  console.log(blog); // Add a log to check if the blog is found

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="open-blog">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </section>
  );
};

export default OpenBlog;
