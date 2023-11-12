import img1 from "../../../assets/imgs/sales/Field-based-marketing-management-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const FieldBasedMarketingManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("field-based-marketing-management-title")}</h1>
            <div className="para">
              <h2>{t("field-based-marketing-management-t-1")}</h2>
              <p>{t("field-based-marketing-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("field-based-marketing-management-t-2")}</h2>
              <p>{t("field-based-marketing-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("field-based-marketing-management-t-3")}</h2>
              <p>{t("field-based-marketing-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Marketing information anywhere"
              title="Field-based-marketing-management"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default FieldBasedMarketingManagement;
