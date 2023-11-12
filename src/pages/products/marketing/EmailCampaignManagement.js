import img1 from "../../../assets/imgs/sales/email-campaign-management-1-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const EmailCampaignManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("email-campaign-management-title")}</h1>
            <div className="para">
              <h2>{t("email-campaign-management-t-1")}</h2>
              <p>{t("email-campaign-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("email-campaign-management-t-2")}</h2>
              <p>{t("email-campaign-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("email-campaign-management-t-3")}</h2>
              <p>{t("email-campaign-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Email campaign with Skyz CRM"
              title="email-campaign-management"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default EmailCampaignManagement;
