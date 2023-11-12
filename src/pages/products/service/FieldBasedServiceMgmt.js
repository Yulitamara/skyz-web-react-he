import img1 from "../../../assets/imgs/service/Field-based-service-ngmt-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const FieldBasedServiceMgmt = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("field-based-service-management-title")}</h1>
            <div className="para">
              <h2>{t("field-based-service-management-t-1")}</h2>
              <p>{t("field-based-service-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("field-based-service-management-t-2")}</h2>
              <p>{t("field-based-service-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("field-based-service-management-t-3")}</h2>
              <p>{t("field-based-service-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Field based service with Skyz CRM"
              title="Field-based-service-ngmt"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default FieldBasedServiceMgmt;
