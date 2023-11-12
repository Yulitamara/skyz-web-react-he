import img1 from "../../../assets/imgs/service/service-performance-management-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const CustomerServicePerformanceMgmt = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("customer-service-performance-management-title")}</h1>
            <div className="para">
              <h2>{t("customer-service-performance-management-t-1")}</h2>
              <p>{t("customer-service-performance-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-performance-management-t-2")}</h2>
              <p>{t("customer-service-performance-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-performance-management-t-3")}</h2>
              <p>{t("customer-service-performance-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Performance management with Skyz Service"
              title="service-performance-management"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default CustomerServicePerformanceMgmt;
