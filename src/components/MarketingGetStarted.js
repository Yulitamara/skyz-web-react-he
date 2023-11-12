import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MarketingGetStarted = () => {
  const { t } = useTranslation();
  return (
    <div className="get-started red-bg">
      <div className="left">
        <h1>{t("marketing-get-started-title")}</h1>
        <p>{t("marketing-get-started-p")}</p>
      </div>
      <div className="right">
        <Link to="/contact">
          <button className="btn red-text">{t("start-btn")}</button>
        </Link>
      </div>
    </div>
  );
};

export default MarketingGetStarted;
