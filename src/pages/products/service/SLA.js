import img1 from "../../../assets/imgs/service/SLA-1-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const SLA = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("s-l-a-title")}</h1>
            <div className="para">
              <h2>{t("s-l-a-t-1")}</h2>
              <p>{t("s-l-a-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("s-l-a-t-2")}</h2>
              <p>{t("s-l-a-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("s-l-a-t-3")}</h2>
              <p>{t("s-l-a-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Service Level Agreement with Skyz CRM"
              title="SLA"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default SLA;
