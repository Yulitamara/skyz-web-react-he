import img1 from "../../../assets/imgs/service/service-information-management-3-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const CustomerServiceInformationMgmt = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("customer-service-information-management-title")}</h1>
            <div className="para">
              <h2>{t("customer-service-information-management-t-1")}</h2>
              <p>{t("customer-service-information-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-information-management-t-2")}</h2>
              <p>{t("customer-service-information-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-information-management-t-3")}</h2>
              <p>{t("customer-service-information-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Information management with Skyz Service"
              title="service-information-management"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default CustomerServiceInformationMgmt;
