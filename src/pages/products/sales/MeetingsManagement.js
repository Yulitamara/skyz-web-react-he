import img1 from "../../../assets/imgs/sales/meetings-management_new-600x747.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const MeetingsManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("meetings-management-title")}</h1>
            <div className="para">
              <h2>{t("meetings-management-t-1")}</h2>
              <p>{t("meetings-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("meetings-management-t-2")}</h2>
              <p>{t("meetings-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("meetings-management-t-3")}</h2>
              <p>{t("meetings-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Meeting management with Skyz CRM"
              title="meetings-management_new"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default MeetingsManagement;
