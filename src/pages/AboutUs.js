import "../assets/scss/_about-us.scss";
import "../assets/scss/base.scss";
import officeImg from "../assets/imgs/aboutus.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const lang = i18n.language || "he";

  return (
    <main
      className="about-us"
      dir={dir}
      lang={lang}
      aria-labelledby="aboutus-title"
    >
      <Helmet>
        <title>{t("about-us-title")} | SkyzCRM</title>
        <meta
          name="description"
          content={
            t("about-us-seo-desc") ||
            "Skyz CRM — מערכת CRM בענן לניהול מכירות, שירות ושיווק ממקום אחד."
          }
        />
        {/* עדכני אם יש לך canonical קבוע */}
        <link rel="canonical" href="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/" />
      </Helmet>

      <h1 id="aboutus-title" className="about-us__title">
        {t("about-us-title")}
      </h1>

      <section className="about-us__content">
        <div className="text">
          <p>{t("about-us-p-1")}</p>
          <p>{t("about-us-p-2")}</p>

          <h2>{t("about-us-t-1")}</h2>
          <p>{t("about-us-p-3")}</p>

          <h2>{t("about-us-t-2")}</h2>
          <p>{t("about-us-p-4")}</p>

          <h2>{t("about-us-t-3")}</h2>
          <p>{t("about-us-p-5")}</p>

          <h2>{t("about-us-t-4")}</h2>
          <p>{t("about-us-p-6")}</p>

          <h2>{t("about-us-t-5")}</h2>
          <p>{t("about-us-p-7")}</p>

          <h2>{t("about-us-t-6")}</h2>
          <p>{t("about-us-p-8")}</p>
        </div>

        <figure className="about-us__media">
          <img
            src={officeImg}
            alt={t("about-us-office-alt") || "Skyz CRM Office"}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <nav className="btns-container" aria-label={t("about-us-legal-links") || "Legal links"}>
        <Link
          to="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/privacy-policy/"
          className="small-btn"
        >
          {t("privacy-policy") || "Privacy Policy"}
        </Link>
        <Link
          to="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/terms-of-service/"
          className="small-btn"
        >
          {t("terms-of-service") || "Terms of Service"}
        </Link>
        <Link
          to="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/cookie-policy/"
          className="small-btn"
        >
          {t("cookie-policy") || "Cookie Policy"}
        </Link>
      </nav>
    </main>
  );
};

export default AboutUs;
