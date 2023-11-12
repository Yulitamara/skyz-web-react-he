import img1 from "../../../assets/imgs/sales/level2-image2.png";
import img2 from "../../../assets/imgs/sales/level2-image1-1-600x747.png";
import img3 from "../../../assets/imgs/sales/level2-image5-600x747.png";
import img4 from "../../../assets/imgs/sales/level2-image6-600x747.png";
import img5 from "../../../assets/imgs/sales/level2-image4-600x747.png";
import img6 from "../../../assets/imgs/sales/sales-level-2-image-8-1-600x747.png";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Sales = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("sales-title")}</h1>
            <div className="para">
              <h2>{t("sales-t-1")}</h2>
              <p>{t("sales-p-1")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-לידים-4/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-2")}</h2>
              <p>{t("sales-p-2")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-הזדמנויות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-3")}</h2>
              <p>{t("sales-p-3")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Maximizing selling with Skyz CRM"
              title="level2-image2"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <div className="para">
              <h2>{t("sales-t-4")}</h2>
              <p>{t("sales-p-4")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-קשרים-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-5")}</h2>
              <p>{t("sales-p-5")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-פגישות-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-6")}</h2>
              <p>{t("sales-p-6")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-ביצועים-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img2}
              alt="Sales meetings management with Skyz CRM"
              title="level2-image1"
            />
          </div>
        </div>
        <div className="product-section-container">
          <div className="right">
            <h1>{t("sales-title-2")}</h1>
            <div className="para">
              <h2>{t("sales-t-7")}</h2>
              <p>
                {t("sales-p-7")}
                <br />
                {t("sales-p-7.1")}
                <br />
                {t("sales-p-7.2")}
                <br />
                {t("sales-p-7.3")}
                <br />
                {t("sales-p-7.4")}
                <br />
                {t("sales-p-7.5")}
              </p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ענן-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-8")}</h2>
              <p>{t("sales-p-8")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/מובייל-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img3}
              alt="Improving work processes with Skyz Sales"
              title="level2-image5"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <div className="para">
              <h2>{t("sales-t-9")}</h2>
              <p>{t("sales-p-9")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שרשור-workflow-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-10")}</h2>
              <p>{t("sales-p-10")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/אינטגרציה-לדואר-אלקטרוני-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img4}
              alt="Improving work processes with Skyz Sales"
              title="level2-image6"
            />
          </div>
        </div>
        <div className="product-section-container">
          <div className="right">
            <h1>{t("sales-title-3")}</h1>
            <div className="para">
              <h2>{t("sales-t-11")}</h2>
              <p>{t("sales-p-11")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שיתוף-מידע-וקבצים-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-12")}</h2>
              <p>{t("sales-p-12")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שיתוף-יומנים-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-13")}</h2>
              <p>{t("sales-p-13")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שיתוף-חברתי-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img5}
              alt="Sharing information online with Skyz Sales"
              title="level2-image4"
            />
          </div>
        </div>
        <div className="product-section-container row-reverse">
          <div className="right">
            <h1>{t("sales-title-4")}</h1>
            <div className="para">
              <h2>{t("sales-t-14")}</h2>
              <p>{t("sales-p-14")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/תחזית-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
            <div className="para">
              <h2>{t("sales-t-15")}</h2>
              <p>{t("sales-p-15")}</p>
              <Link
                to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/דוחות-ודשבורד-מכירות/"
                className="link"
              >
                {t("learn-more")}...
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={img6}
              alt="Smart sales dashboards with Skyz CRM"
              title="sales-level-2-image-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
