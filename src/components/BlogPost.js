import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const BlogPost = () => {
  const { i18n } = useTranslation();
  const { url } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const isHe = i18n.language?.startsWith("he");
  const dir = isHe ? "rtl" : "ltr";
  const lang = isHe ? "he" : "en";

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
        const found = normalized.find((b) => b.url === url);
        setPost(found || null);
        setNotFound(!found);
      })
      .catch(() => setNotFound(true));
  }, [isHe, url]);

  const html = useMemo(() => ({ __html: post?.content || "" }), [post]);

  if (notFound) {
    return (
      <section dir={dir} className="blog-post">
        <Helmet>
          <title>{isHe ? "הפוסט לא נמצא" : "Post not found"} | SkyzCRM</title>
          <meta httpEquiv="content-language" content={lang} />
        </Helmet>
        <h1>{isHe ? "הפוסט לא נמצא" : "Post not found"}</h1>
        <p><Link to="/בלוג/">{isHe ? "חזרה לבלוג" : "Back to blog"}</Link></p>
      </section>
    );
  }

  if (!post) {
    return (
      <section dir={dir} className="blog-post">
        <Helmet>
          <meta httpEquiv="content-language" content={lang} />
        </Helmet>
        <p>{isHe ? "טוען…" : "Loading…"}</p>
      </section>
    );
  }

  return (
    <section dir={dir} className="blog-post">
      {/* לא נוגעים ב-<html dir>; רק מטא/כותרת מקומית */}
      <Helmet>
        <title>{post.title} | SkyzCRM</title>
        <meta name="description" content={post.short || post.title} />
        <meta httpEquiv="content-language" content={lang} />
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
        <Link to="/בלוג/">
          {isHe ? "← חזרה לכל המאמרים" : "← Back to all articles"}
        </Link>
      </p>
    </section>
  );
};

export default BlogPost;
