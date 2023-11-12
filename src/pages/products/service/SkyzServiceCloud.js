import img1 from "../../../assets/imgs/service/Skyz-Service-Cloud_new-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const SkyzServiceCloud = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("skyz-service-cloud-title")}</h1>
            <div className="para">
              <h2>{t("skyz-service-cloud-t-1")}</h2>
              <p>{t("skyz-service-cloud-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-service-cloud-t-2")}</h2>
              <p>{t("skyz-service-cloud-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-service-cloud-t-3")}</h2>
              <p>{t("skyz-service-cloud-p-3")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-service-cloud-t-4")}</h2>
              <p>{t("skyz-service-cloud-p-4")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Service cloud technology"
              title="Skyz-Service-Cloud_new"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default SkyzServiceCloud;
