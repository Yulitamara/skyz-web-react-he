import img1 from "../../../assets/imgs/sales/generate-cstomer-details-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const GenerateCustomerDetails = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("generate-customer-details-title")}</h1>
            <div className="para">
              <h2>{t("generate-customer-details-t-1")}</h2>
              <p>{t("generate-customer-details-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("generate-customer-details-t-2")}</h2>
              <p>{t("generate-customer-details-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("generate-customer-details-t-3")}</h2>
              <p>{t("generate-customer-details-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Generate customer details with Skyz CRM"
              title="generate-cstomer-details"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default GenerateCustomerDetails;
