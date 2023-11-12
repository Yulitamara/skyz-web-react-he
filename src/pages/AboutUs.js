import "../assets/scss/_about-us.scss";
import "../assets/scss/base.scss";
import officeImg from "../assets/imgs/undraw_in_the_office_re_jtgc.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="about-us">
      <h1 className="about-us__title">{t("about-us-title")}</h1>
      <div className="about-us__content">
        <div className="text">
          <p>
            {t("about-us-p-1")}
            <br />
            <br />
            {t("about-us-p-2")}
          </p>
          <br />
          <br />
          <h2>{t("about-us-t-1")}</h2>
          <br />
          <p>{t("about-us-p-3")}</p>
          <br />
          <br />
          <h2>{t("about-us-t-2")}</h2>
          <br />
          <p>{t("about-us-p-4")}</p>
          <br />
          <br />
          <h2>{t("about-us-t-3")}</h2>
          <br />
          <p>{t("about-us-p-5")}</p>
          <br />
          <br />
          <h2> {t("about-us-t-4")}</h2>
          <br />
          <p>{t("about-us-p-6")}</p>
          <br />
          <br />
          <h2> {t("about-us-t-5")}</h2>
          <br />
          <p>{t("about-us-p-7")}</p>
          <br />
          <br />
          <h2> {t("about-us-t-6")}</h2>
          <br />
          <p>{t("about-us-p-8")}</p>
        </div>
        <img src={officeImg} alt="office-img" />
      </div>

      <div className="btns-container">
        <Link to="/privacy" className="small-btn">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="small-btn">
          Terms of Service
        </Link>
        <Link to="/cookie-policy" className="small-btn">
          Cookie Policy
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
