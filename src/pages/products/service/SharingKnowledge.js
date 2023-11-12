import img1 from "../../../assets/imgs/service/Sharing-knowledge-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const SharingKnowledge = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("sharing-knowledge-title")}</h1>
            <div className="para">
              <h2>{t("sharing-knowledge-t-1")}</h2>
              <p>{t("sharing-knowledge-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("sharing-knowledge-t-2")}</h2>
              <p>{t("sharing-knowledge-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("sharing-knowledge-t-3")}</h2>
              <p>{t("sharing-knowledge-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Sharing knowledge with Skyz Service"
              title="Sharing-knowledge"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default SharingKnowledge;
