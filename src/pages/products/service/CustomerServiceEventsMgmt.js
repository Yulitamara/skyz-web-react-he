import img1 from "../../../assets/imgs/service/Customer-service-events-mgmt-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const CustomerServiceEventsMgmt = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("customer-service-events-management-title")}</h1>
            <div className="para">
              <h2>{t("customer-service-events-management-t-1")}</h2>
              <p>{t("customer-service-events-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-events-management-t-2")}</h2>
              <p>{t("customer-service-events-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-events-management-t-3")}</h2>
              <p>{t("customer-service-events-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Service events management with Skyz CRM"
              title="Customer-service-events-mgmt"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default CustomerServiceEventsMgmt;
