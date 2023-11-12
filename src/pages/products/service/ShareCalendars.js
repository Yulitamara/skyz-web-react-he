import img1 from "../../../assets/imgs/service/share-calanders-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";
import { useTranslation } from "react-i18next";

const ShareCalendars = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("share-calendars-title")}</h1>
            <div className="para">
              <h2>{t("share-calendars-t-1")}</h2>
              <p>{t("share-calendars-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("share-calendars-t-2")}</h2>
              <p>{t("share-calendars-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("share-calendars-t-3")}</h2>
              <p>{t("share-calendars-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Sharing calendars with Skyz Service"
              title="share-calanders"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default ShareCalendars;
