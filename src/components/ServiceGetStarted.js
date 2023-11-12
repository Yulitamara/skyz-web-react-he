import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceGetStarted = () => {
  const { t } = useTranslation();
  return (
    <div className="get-started green-bg">
      <div className="left">
        <h1>{t("service-get-started-title")}</h1>
        <p>{t("service-get-started-p")}</p>
      </div>
      <div className="right">
        <Link to="/contact">
          <button className="btn green-text">{t("start-btn")}</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceGetStarted;
