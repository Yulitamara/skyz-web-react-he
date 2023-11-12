import img1 from "../../../assets/imgs/service/Social-customer-service-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const SocialCustomerService = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("social-customer-service-title")}</h1>
            <div className="para">
              <h2>{t("social-customer-service-t-1")}</h2>
              <p>{t("social-customer-service-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("social-customer-service-t-2")}</h2>
              <p>{t("social-customer-service-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("social-customer-service-t-3")}</h2>
              <p>{t("social-customer-service-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Social customer service with Skyz CRM"
              title="Social-customer-service"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default SocialCustomerService;
