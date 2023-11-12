import img1 from "../../../assets/imgs/sales/mobile-campaign-management_mew-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const MobileCampaignManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("mobile-campaign-management-title")}</h1>
            <div className="para">
              <h2>{t("mobile-campaign-management-t-1")}</h2>
              <p>{t("mobile-campaign-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("mobile-campaign-management-t-2")}</h2>
              <p>{t("mobile-campaign-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("mobile-campaign-management-t-3")}</h2>
              <p>{t("mobile-campaign-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Mobile campaign with Skyz CRM"
              title="mobile-campaign-management_mew"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default MobileCampaignManagement;
