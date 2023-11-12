import img1 from "../../../assets/imgs/sales/social-sharing.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const SocialSharing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("social-sharing-title")}</h1>
            <div className="para">
              <h2>{t("social-sharing-t-1")}</h2>
              <p>{t("social-sharing-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("social-sharing-t-2")}</h2>
              <p>{t("social-sharing-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("social-sharing-t-3")}</h2>
              <p>{t("social-sharing-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Social sharing with Skyz Sales"
              title="social-sharing"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default SocialSharing;
