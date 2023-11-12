import img1 from "../../../assets/imgs/sales/campaign-optimization-1-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const CampaignOptimization = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("campaign-optimization-title")}</h1>
            <div className="para">
              <h2>{t("campaign-optimization-t-1")}</h2>
              <p>{t("campaign-optimization-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("campaign-optimization-t-2")}</h2>
              <p>{t("campaign-optimization-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("campaign-optimization-t-3")}</h2>
              <p>{t("campaign-optimization-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Campaign optimization with Skyz Marketing"
              title="campaign-optimization"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default CampaignOptimization;
