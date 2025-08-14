import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const BlogPost = () => {
  const { i18n } = useTranslation();
  const { url } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const lng = i18n.language?.startsWith("he") ? "he" : "en";
    import(`../data/blogs.${lng}.json`)
      .then((m) => {
        const raw = m.default?.blogs ?? [];
        const arr = Array.isArray(raw) ? raw : Object.values(raw);
        const normalized = arr.map((b) => ({
          ...b,
          content: Array.isArray(b.content) ? b.content.join("") : b.content,
        }));
        const found = normalized.find((b) => b.url === url);
        if (found) {
          setPost(found);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [i18n.language, url]);

  const html = useMemo(() => ({ __html: post?.content || "" }), [post]);

  if (notFound) {
    return (
      <section dir="rtl" className="blog-post">
        <h1>הפוסט לא נמצא</h1>
        <p>
          <Link to="/בלוג/">חזרה לבלוג</Link>
        </p>
      </section>
    );
  }

  if (!post) {
    return (
      <section dir="rtl" className="blog-post">
        <p>טוען…</p>
      </section>
    );
  }

  return (
    <section dir="rtl" className="blog-post">
      <Helmet>
        <title>{post.title} | SkyzCRM</title>
        <meta name="description" content={post.short || post.title} />
        <link rel="canonical" href={`/בלוג/${post.url}/`} />
      </Helmet>

      <h1>{post.title}</h1>

      {post.img && (
            <div className="img-container">
              <img className="blog-post-img" src={post.img} alt={post.title} />
            </div>
      )}

      <article className="content" dangerouslySetInnerHTML={html} />

      <p className="back-to-articles">
        <Link to="/בלוג/">← חזרה לכל המאמרים</Link>
      </p>
    </section>
  );
};

export default BlogPost;
