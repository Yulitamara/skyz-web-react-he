import img1 from "../../../assets/imgs/sales/marketing-control-1-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const MarketingControl = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("marketing-control-title")}</h1>
            <div className="para">
              <h2>{t("marketing-control-t-1")}</h2>
              <p>{t("marketing-control-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-control-t-2")}</h2>
              <p>{t("marketing-control-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-control-t-3")}</h2>
              <p>{t("marketing-control-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Marketing control with Skyz CRM"
              title="marketing-control"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default MarketingControl;
