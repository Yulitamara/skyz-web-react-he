import img1 from "../../../assets/imgs/service/tasks-mgmt-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const TasksManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("tasks-management-title")}</h1>
            <div className="para">
              <h2>{t("tasks-management-t-1")}</h2>
              <p>{t("tasks-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("tasks-management-t-2")}</h2>
              <p>{t("tasks-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("tasks-management-t-3")}</h2>
              <p>{t("tasks-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Task management with Skyz Service"
              title="tasks-mgmt"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default TasksManagement;
