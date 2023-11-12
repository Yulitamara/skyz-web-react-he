import { Link } from "react-router-dom";
import contactImg from "../assets/imgs/undraw_contact_us_re_4qqt.svg";
import { ContactForm } from "../components/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact">
      <div className="content">
        <div className="info">
          <h2>{t("contact-header")}</h2>
          <p>
            {t("contact-times")}
          </p>
          <div className="info-details">
            <div className="detail">
              <Link
                to="https://goo.gl/maps/NBRVWoysWoAZbh8V9"
                className="pin-drop-icon"
              >
                <span className="material-symbols-outlined contact-icon">
                  pin_drop
                </span>
              </Link>
              <p>
                {t("contact-location")}
                
              </p>
            </div>
            <div className="detail">
              <span className="material-symbols-outlined contact-icon">
                mail
              </span>
              <p>sales@impactsoft.co.il</p>
            </div>
            <div className="detail">
              <span className="material-symbols-outlined contact-icon">
                call
              </span>
              <p>
                {t("contact-phone")}
              </p>
            </div>
          </div>
          <div className="info-img">
            <img src={contactImg} alt="contact img" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
