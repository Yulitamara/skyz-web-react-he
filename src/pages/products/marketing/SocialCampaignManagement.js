import img1 from "../../../assets/imgs/sales/social-campaign-managment-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const SocialCampaignManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("social-campaign-management-title")}</h1>
            <div className="para">
              <h2>{t("social-campaign-management-t-1")}</h2>
              <p>{t("social-campaign-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("social-campaign-management-t-2")}</h2>
              <p>{t("social-campaign-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("social-campaign-management-t-3")}</h2>
              <p>{t("social-campaign-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Social campaign with Skyz CRM"
              title="social-campaign-managment"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default SocialCampaignManagement;
