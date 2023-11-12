import img1 from "../../../assets/imgs/service/skyz-service-mobile-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const SkyzServiceMobile = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("skyz-service-mobile-title")}</h1>
            <div className="para">
              <h2>{t("skyz-service-mobile-t-1")}</h2>
              <p>{t("skyz-service-mobile-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-service-mobile-t-2")}</h2>
              <p>{t("skyz-service-mobile-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-service-mobile-t-3")}</h2>
              <p>{t("skyz-service-mobile-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Service mobile access"
              title="skyz-service-mobile"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default SkyzServiceMobile;
