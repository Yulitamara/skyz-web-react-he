import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <section className="advantages">
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">cloud</span>
        </div>
        <h2 className="header">{t("advantages-cloud-t")}</h2>
        <p>{t("advantages-cloud-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">sync</span>
        </div>
        <h2 className="header">{t("advantages-360-t")}</h2>
        <p>{t("advantages-360-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">devices</span>
        </div>
        <h2 className="header">{t("advantages-anywhere-t")}</h2>
        <p>{t("advantages-anywhere-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">watch</span>
        </div>
        <h2 className="header">{t("advantages-real-time-t")}</h2>
        <p>{t("advantages-real-time-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">view_array</span>
        </div>
        <h2 className="header">{t("advantages-friendly-t")}</h2>
        <p>{t("advantages-friendly-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">wifi_tethering</span>
        </div>
        <h2 className="header">{t("advantages-instant-t")}</h2>
        <p>{t("advantages-instant-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">highlight</span>
        </div>
        <h2 className="header">{t("advantages-innovative-t")}</h2>
        <p>{t("advantages-innovative-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">phone_iphone</span>
        </div>
        <h2 className="header">{t("advantages-mobile-t")}</h2>
        <p>{t("advantages-mobile-p")}</p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">equalizer</span>
        </div>
        <h2 className="header">{t("advantages-roi-t")}</h2>
        <p>{t("advantages-roi-p")}</p>
      </div>
    </section>
  );
};

export default Advantages;
