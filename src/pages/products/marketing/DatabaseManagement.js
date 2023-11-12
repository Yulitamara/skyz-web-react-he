import img1 from "../../../assets/imgs/sales/database-management-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";
import { useTranslation } from "react-i18next";

const DatabaseManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("database-management-title")}</h1>
            <div className="para">
              <h2>{t("database-management-t-1")}</h2>
              <p>{t("database-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("database-management-t-2")}</h2>
              <p>{t("database-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("database-management-t-3")}</h2>
              <p>{t("database-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Database management with Skyz CRM"
              title="database-management"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default DatabaseManagement;
