import img1 from "../../../assets/imgs/sales/Reports-and-Dashboards-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const ReportsAndDashboardsMarketing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("marketing-reports-and-dashboards-title")}</h1>
            <div className="para">
              <h2>{t("marketing-reports-and-dashboards-t-1")}</h2>
              <p>{t("marketing-reports-and-dashboards-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-reports-and-dashboards-t-2")}</h2>
              <p>{t("marketing-reports-and-dashboards-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-reports-and-dashboards-t-3")}</h2>
              <p>{t("marketing-reports-and-dashboards-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Marketing dashboards"
              title="Reports-and-Dashboards"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default ReportsAndDashboardsMarketing;
