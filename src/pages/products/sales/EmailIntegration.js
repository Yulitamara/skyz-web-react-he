import img1 from "../../../assets/imgs/sales/email-integration.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const EmailIntegration = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("email-integration-title")}</h1>
            <div className="para">
              <h2>{t("email-integration-t-1")}</h2>
              <p>{t("email-integration-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("email-integration-t-2")}</h2>
              <p>{t("email-integration-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("email-integration-t-3")}</h2>
              <p>{t("email-integration-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Email integration with skyz Sales"
              title="Email-integration"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default EmailIntegration;
