import img1 from "../../../assets/imgs/service/Customer-service-workflow_new-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const CustomerServiceWorkflow = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("customer-service-workflow-title")}</h1>
            <div className="para">
              <h2>{t("customer-service-workflow-t-1")}</h2>
              <p>{t("customer-service-workflow-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-workflow-t-2")}</h2>
              <p>{t("customer-service-workflow-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("customer-service-workflow-t-3")}</h2>
              <p>{t("customer-service-workflow-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Workflow with Skyz Service"
              title="Customer-service-workflow_new"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default CustomerServiceWorkflow;
