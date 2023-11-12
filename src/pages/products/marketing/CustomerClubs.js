import img1 from "../../../assets/imgs/sales/customers-club-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const CustomerClubs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("customer-clubs-title")}</h1>
            <div className="para">
              <h2>{t("customer-clubs-t-1")}</h2>
              <p>{t("customer-clubs-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-clubs-t-2")}</h2>
              <p>{t("customer-clubs-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-clubs-t-3")}</h2>
              <p>{t("customer-clubs-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Customer clubs with Skyz CRM"
              title="customers-club"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default CustomerClubs;
