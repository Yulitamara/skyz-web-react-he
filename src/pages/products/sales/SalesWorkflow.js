import img1 from "../../../assets/imgs/sales/Workflow_new-600x559.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const SalesWorkflow = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("sales-workflow-title")}</h1>
            <div className="para">
              <h2>{t("sales-workflow-t-1")}</h2>
              <p>{t("sales-workflow-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("sales-workflow-t-2")}</h2>
              <p>{t("sales-workflow-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("sales-workflow-t-3")}</h2>
              <p>{t("sales-workflow-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="workflow with Skyz Sales"
              title="Workflow_new"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default SalesWorkflow;
