import { Link } from "react-router-dom";
import "../assets/scss/_hero.scss";
import "../assets/scss/base.scss";
// import heroImg from "../assets/imgs/hero-img.svg";
import { useTranslation } from "react-i18next";
// import heroImg from "../assets/imgs/hero-img.jpg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <h1>
        Skyz<span>CRM</span>
      </h1>
      <p>
        {t("manage")}
        <span className="dot"></span>
      </p>
      {/* <img src={heroImg} alt="hero-img" className="hero-img" /> */}

      <div className="btns-container">
        <Link
          to="/skyzcrm-ניהול-קשרי-לקוחות/צור-קשר/"
          className="btn-secondary"
        >
          {t("start-btn")}
        </Link>
        <Link
          to="https://crm-erp.co.il/planc2/logon/?lang=102"
          className="btn-primary"
        >
          {t("login-btn")}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
