import img1 from "../../../assets/imgs/sales/Reports-Dashboards-1-600x395.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const ReportsAndDashboards = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("reports-and-dashboards-title")}</h1>
            <div className="para">
              <h2>{t("reports-and-dashboards-t-1")}</h2>
              <p>{t("reports-and-dashboards-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("reports-and-dashboards-t-2")}</h2>
              <p>{t("reports-and-dashboards-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("reports-and-dashboards-t-3")}</h2>
              <p>{t("reports-and-dashboards-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Sales dashboards"
              title="Reports-&-Dashboards"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default ReportsAndDashboards;
