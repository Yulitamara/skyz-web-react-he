import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SalesGetStarted = () => {
  const { t } = useTranslation();
  return (
    <div className="get-started">
      <div className="left">
        <h1>{t("sales-get-started-title")}</h1>
        <p>{t("sales-get-started-p")}</p>
      </div>
      <div className="right">
        <Link to="/contact">
          <button className="btn">{t("start-btn")}</button>
        </Link>
      </div>
    </div>
  );
};

export default SalesGetStarted;
