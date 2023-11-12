import img1 from "../../../assets/imgs/sales/Dell-performance-management2-600x780.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const PerformanceManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("performance-management-title")}</h1>
            <div className="para">
              <h2>{t("performance-management-t-1")}</h2>
              <p>{t("performance-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("performance-management-t-2")}</h2>
              <p>{t("performance-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("performance-management-t-3")}</h2>
              <p>{t("performance-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Performance management with Skyz Sales"
              title="Dell-performance-management2"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default PerformanceManagement;
