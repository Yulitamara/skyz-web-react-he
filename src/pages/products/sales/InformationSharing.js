import img1 from "../../../assets/imgs/sales/Information-sharing3-1-600x395.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const InformationSharing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("information-sharing-title")}</h1>
            <div className="para">
              <h2>{t("information-sharing-t-1")}</h2>
              <p>{t("information-sharing-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("information-sharing-t-2")}</h2>
              <p>{t("information-sharing-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("information-sharing-t-3")}</h2>
              <p>{t("information-sharing-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Information sharing with Skyz Sales"
              title="Information-sharing3"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default InformationSharing;
