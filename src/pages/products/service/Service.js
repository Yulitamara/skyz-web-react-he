import img1 from "../../../assets/imgs/sales/service-level-2-image-1-3-600x747.png";
import img2 from "../../../assets/imgs/sales/service-level-2-image-6-1-600x747.png";
import img3 from "../../../assets/imgs/sales/service-level-2-image-3-1-600x747.png";
import img4 from "../../../assets/imgs/sales/service-level-2-image-4-600x747.png";
import img5 from "../../../assets/imgs/sales/service-level-2-image-5-3.png";
import img6 from "../../../assets/imgs/sales/level2-image8-600x747.png";
import img7 from "../../../assets/imgs/sales/service-level2-image9-600x747.png";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Service = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("service-title")}</h1>
            <div className="para">
              <h2>{t("service-t-1")}</h2>
              <p>{t("service-p-1")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-קריאות-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-2")}</h2>
              <p>{t("service-p-2")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-אירועי-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-3")}</h2>
              <p>{t("service-p-3")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-משימות-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Comprehensive service management with Skyz CRM"
              title="service-level-2-image-1"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <div className="para">
              <h2>{t("service-t-4")}</h2>
              <p>{t("service-p-4")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-חוזי-שירות-sla/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-5")}</h2>
              <p>{t("service-p-5")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-שירות-שטח/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-6")}</h2>
              <p>{t("service-p-6")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-ביצועי-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img2}
              alt="SLA management with Skyz Service"
              title="service-level-2-image-6"
            />
          </div>
        </div>
        <div className="product-section-container">
          <div className="right">
            <h1>{t("service-title-2")}</h1>
            <div className="para">
              <h2>{t("service-t-7")}</h2>
              <p>{t("service-p-7")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-מידע-וקבצים-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-8")}</h2>
              <p>{t("service-p-8")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-יומנים-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img3}
              alt="Files sharing with Skyz Service"
              title="service-level-2-image-3"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <div className="para">
              <h2>{t("service-t-9")}</h2>
              <p>{t("service-p-9")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-חברתי-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-10")}</h2>
              <p>{t("service-p-10")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-ידע-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img4}
              alt="Social customer service with Skyz Service"
              title="service-level-2-image-4"
            />
          </div>
        </div>
        <div className="product-section-container">
          <div className="right">
            <h1>{t("service-title-3")}</h1>
            <div className="para">
              <h2>{t("service-t-11")}</h2>
              <p>
                {t("service-p-11")}
                <br />
                {t("service-p-11.1")}
                <br />
                {t("service-p-11.2")}
                <br />
                {t("service-p-11.3")}
                <br />
                {t("service-p-11.4")}
                <br />
                {t("service-p-11.5")}
              </p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/טכנולוגיית-ענן/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-12")}</h2>
              <p>{t("service-p-12")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/מובייל-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img5}
              alt="Service anytime anywhere with Skyz CRM"
              title="service-level-2-image-5"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <div className="para">
              <h2>{t("service-t-13")}</h2>
              <p>{t("service-p-13")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שרשור-workflow-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-14")}</h2>
              <p>{t("service-p-14")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/אינטגרציה-לדואר-אלקטרוני-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img6}
              alt="Customer service workflow with Skyz CRM"
              title="level2-image8"
            />
          </div>
        </div>
        <div className="product-section-container">
          <div className="right">
            <h1>{t("service-title-4")}</h1>
            <div className="para">
              <h2>{t("service-t-15")}</h2>
              <p>{t("service-p-15")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/בקרת-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("service-t-16")}</h2>
              <p>{t("service-p-16")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/דוחות-ודשבורד-שירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img7}
              alt="Analyze information with Skyz CRM"
              title="service-level2-image9"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
