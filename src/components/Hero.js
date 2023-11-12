import { Link } from "react-router-dom";
import "../assets/scss/_hero.scss";
import "../assets/scss/base.scss";
// import heroImg from "../assets/imgs/hero-img.svg";
import { useTranslation } from "react-i18next";

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
      <div className="btns-container">
        <Link to="/contact" className="btn-secondary">
          {t("start-btn")}
        </Link>
        <Link
          to="https://crm-erp.co.il/planc2/logon/?lang=102"
          className="btn-primary"
        >
          {t("login-btn")}
        </Link>
      </div>
      {/* <img src={heroImg} alt="hero-img" className="hero-img" /> */}
    </section>
  );
};

export default Hero;
