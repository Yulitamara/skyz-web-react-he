import img1 from "../../../assets/imgs/sales/social-sharing-2-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const SocialSharingMarketing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("marketing-social-sharing-title")}</h1>
            <div className="para">
              <h2>{t("marketing-social-sharing-t-1")}</h2>
              <p>{t("marketing-social-sharing-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-social-sharing-t-2")}</h2>
              <p>{t("marketing-social-sharing-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-social-sharing-t-3")}</h2>
              <p>{t("marketing-social-sharing-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Social sharing with Skyz Marketing"
              title="social-sharing"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default SocialSharingMarketing;
