import img1 from "../../../assets/imgs/sales/information-sharing_new-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const InformationSharingMarketing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("marketing-information-sharing-title")}</h1>
            <div className="para">
              <h2>{t("marketing-information-sharing-t-1")}</h2>
              <p>{t("marketing-information-sharing-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-information-sharing-t-2")}</h2>
              <p>{t("marketing-information-sharing-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("marketing-information-sharing-t-3")}</h2>
              <p>{t("marketing-information-sharing-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Information sharing with Skyz Marketing"
              title="information-sharing_new"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default InformationSharingMarketing;
