// OpenBlog.js
import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../data/BlogData";

const OpenBlog = () => {
  // const { id } = useParams();
  // const blog = BlogData.find((blog) => blog.id === parseInt(id, 10));

  const { url } = useParams();
  const blog = BlogData.find((blog) => blog.url === url);

  console.log(blog); // Add a log to check if the blog is found

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="open-blog">
      <h2 className="open-blog-title">{blog.title}</h2>
      <img src={blog.img} />
      <p dangerouslySetInnerHTML={{ __html: blog.content }} />
    </section>
  );
};

export default OpenBlog;
