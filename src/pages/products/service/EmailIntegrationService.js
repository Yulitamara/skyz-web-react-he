import img1 from "../../../assets/imgs/service/Email-integration-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const EmailIntegrationService = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("service-email-integration-title")}</h1>
            <div className="para">
              <h2>{t("service-email-integration-t-1")}</h2>
              <p>{t("service-email-integration-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("service-email-integration-t-2")}</h2>
              <p>{t("service-email-integration-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("service-email-integration-t-3")}</h2>
              <p>{t("service-email-integration-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Email integration with Skyz Service"
              title="Email-integration"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default EmailIntegrationService;
