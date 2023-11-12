import img1 from "../../../assets/imgs/service/Dashboard-service-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const ReportsAndDashboardsService = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("service-reports-and-dashboards-title")}</h1>
            <div className="para">
              <h2>{t("service-reports-and-dashboards-t-1")}</h2>
              <p>{t("service-reports-and-dashboards-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("service-reports-and-dashboards-t-2")}</h2>
              <p>{t("service-reports-and-dashboards-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("service-reports-and-dashboards-t-3")}</h2>
              <p>{t("service-reports-and-dashboards-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Service dashboards"
              title="Dashboard-service"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default ReportsAndDashboardsService;
