import img1 from "../../../assets/imgs/sales/calendar-sharing-600x747.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const CalendarSharing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("calendar-sharing-title")}</h1>
            <div className="para">
              <h2>{t("calendar-sharing-t-1")}</h2>
              <p>{t("calendar-sharing-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("calendar-sharing-t-2")}</h2>
              <p>{t("calendar-sharing-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("calendar-sharing-t-3")}</h2>
              <p>{t("calendar-sharing-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Calendar sharing with Skyz Sales"
              title="calendar-sharing"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default CalendarSharing;
