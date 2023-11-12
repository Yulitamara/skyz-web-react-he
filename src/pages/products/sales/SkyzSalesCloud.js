import img1 from "../../../assets/imgs/sales/Dell-cloud-sales2-600x395.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const SkyzSalesCloud = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("skyz-sales-cloud-title")}</h1>
            <div className="para">
              <h2>{t("skyz-sales-cloud-t-1")}</h2>
              <p>{t("skyz-sales-cloud-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-sales-cloud-t-2")}</h2>
              <p>{t("skyz-sales-cloud-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-sales-cloud-t-3")}</h2>
              <p>{t("skyz-sales-cloud-p-3")}</p>
            </div>
            <div className="para">
              <h2>{t("skyz-sales-cloud-t-4")}</h2>
              <p>{t("skyz-sales-cloud-p-4")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Sales cloud technology"
              title="Dell-cloud-sales2"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default SkyzSalesCloud;
