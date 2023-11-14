
const Blog = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h3 className="blog-title">{blog.title}</h3>
          <div className="img-container">
            <img src={blog.img} alt={blog.title} />
          </div>
          <p>{blog.short}</p>
        </div>
      ))}
    </>
  );
};

export default Blog;
