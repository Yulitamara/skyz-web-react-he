import img1 from "../../../assets/imgs/sales/Maximizing-new-customers-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const MaximizingNewCustomers = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("maximizing-new-customers-title")}</h1>
            <div className="para">
              <h2>{t("maximizing-new-customers-t-1")}</h2>
              <p>{t("maximizing-new-customers-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("maximizing-new-customers-t-2")}</h2>
              <p>{t("maximizing-new-customers-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("maximizing-new-customers-t-3")}</h2>
              <p>{t("maximizing-new-customers-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Maximizing new customers with Skyz Marketing"
              title="Maximizing-new-customers"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default MaximizingNewCustomers;
