import img1 from "../../../assets/imgs/sales/Contact-management-600x747.png";
import SalesGetStarted from "../../../components/SalesGetStarted";
import { useTranslation } from "react-i18next";

const ContactManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>{t("contact-management-title")}</h1>
            <div className="para">
              <h2>{t("contact-management-t-1")}</h2>
              <p>{t("contact-management-p-1")}</p>
            </div>
            <div className="para">
              <h2>{t("contact-management-t-2")}</h2>
              <p>{t("contact-management-p-2")}</p>
            </div>
            <div className="para">
              <h2>{t("contact-management-t-3")}</h2>
              <p>{t("contact-management-p-3")}</p>
            </div>
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Contact management with Skyz CRM"
              title="Contact-management"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default ContactManagement;
