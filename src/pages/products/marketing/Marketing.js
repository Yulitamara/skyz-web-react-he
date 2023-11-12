import img1 from "../../../assets/imgs/sales/marketing-level-2-img1-1-600x747.png";
import img2 from "../../../assets/imgs/sales/marketing-level-2-img2-600x747.png";
import img3 from "../../../assets/imgs/sales/marketing-level-2-img3-1-600x747.png";
import img4 from "../../../assets/imgs/sales/marketing-level-2-img6-2-600x747.png";
import img5 from "../../../assets/imgs/sales/marketing-level-2-img7-600x747.png";
import img6 from "../../../assets/imgs/sales/marketing-level-2-img8-600x747.png";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Marketing = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("marketing-title")}</h1>
            <div className="para">
              <h2>{t("marketing-t-1")}</h2>
              <p>{t("marketing-p-1")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-קמפיין-אימיילים/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-2")}</h2>
              <p>{t("marketing-p-2")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-קמפיין-מובייל/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Progressive campaigns with Skyz Marketing"
              title="Skyz Marketing"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <div className="para">
              <h2>{t("marketing-t-3")}</h2>
              <p>{t("marketing-p-3")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-קמפיין-חברתי/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-4")}</h2>
              <p>{t("marketing-p-4")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-מאגרי-מידע/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img2}
              alt="Social marketing management with Skyz CRM"
              title="marketing-level-2-img2"
            />
          </div>
        </div>
        <div className="product-section-container">
          <div className="right">
            <h1>{t("marketing-title-2")}</h1>
            <div className="para">
              <h2>{t("marketing-t-5")}</h2>
              <p>{t("marketing-p-5")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-מועדוני-לקוחות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-6")}</h2>
              <p>{t("marketing-p-6")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/אפיון-לקוחות-קיימים/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-7")}</h2>
              <p>{t("marketing-p-7")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניתוח-מידע-להתאמה-אישית/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img3}
              alt="Social marketing management with Skyz CRM"
              title="marketing-level-2-img3"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <h1>{t("marketing-title-3")}</h1>
            <div className="para">
              <h2>{t("marketing-t-8")}</h2>
              <p>{t("marketing-p-8")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/שיתוף-מידע-שיווק/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-9")}</h2>
              <p>{t("marketing-p-9")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/שיתוף-חברתי-שיווק/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img4}
              alt="Sharing marketing information with Skyz CRM"
              title="marketing-level-2-img6"
            />
          </div>
        </div>
        <div className="product-section-container">
          <div className="right">
            <h1>{t("marketing-title-4")}</h1>
            <div className="para">
              <h2>{t("marketing-t-10")}</h2>
              <p>{t("marketing-p-10")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/אופטימיזציית-קמפיינים-פרסומיים/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-11")}</h2>
              <p>{t("marketing-p-11")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/בקרת-שיווק-כוללת/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-12")}</h2>
              <p>{t("marketing-p-12")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/מקסום-לקוחות-חדשים/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img5}
              alt="Improving marketing processes with Skyz CRM"
              title="marketing-level-2-img7"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <h1>{t("marketing-title-5")}</h1>
            <div className="para">
              <h2>{t("marketing-t-13")}</h2>
              <p>{t("marketing-p-13")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-שיווק-מהשטח/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-14")}</h2>
              <p>{t("marketing-p-14")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/אוטומציה-של-תהליכים-בשיווק/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("marketing-t-15")}</h2>
              <p>{t("marketing-p-15")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/דוחות-ודשבורד-שיווק/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img6}
              alt="Sharing marketing information with Skyz CRM"
              title="marketing-level-2-img8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
