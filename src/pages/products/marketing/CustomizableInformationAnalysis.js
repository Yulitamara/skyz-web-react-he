import img1 from "../../../assets/imgs/sales/сcustomizable-analis-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const CustomizableInformationAnalysis = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("customizable-information-analysis-title")}</h1>
            <div className="para">
              <h2>{t("customizable-information-analysis-t-1")}</h2>
              <p>{t("customizable-information-analysis-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("customizable-information-analysis-t-2")}</h2>
              <p>{t("customizable-information-analysis-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("customizable-information-analysis-t-3")}</h2>
              <p>{t("customizable-information-analysis-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="One on one marketing with Skyz CRM"
              title="сustomizable-analis"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default CustomizableInformationAnalysis;
