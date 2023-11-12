import img1 from "../../../assets/imgs/sales/Sales-management_new-600x747.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const SalesManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("sales-management-title")}</h1>
            <div className="para">
              <h2>{t("sales-management-t-1")}</h2>
              <p>{t("sales-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("sales-management-t-2")}</h2>
              <p>{t("sales-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("sales-management-t-3")}</h2>
              <p>{t("sales-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Sales management with Skyz CRM"
              title="Sales-management_new"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default SalesManagement;
