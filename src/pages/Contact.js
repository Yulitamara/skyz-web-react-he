import { ContactForm } from "../components/ContactForm";
import contactImg from "../assets/imgs/contact.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <div className="content">
        <div className="info">
          <h2>{t("contact-header")}</h2>
          <p>{t("contact-times")}</p>

          <div className="info-details">
            <div className="detail">
              <a
                href="https://goo.gl/maps/NBRVWoysWoAZbh8V9"
                className="pin-drop-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined contact-icon">
                  pin_drop
                </span>
              </a>
              <p>{t("contact-location")}</p>
            </div>

            <div className="detail">
              <span className="material-symbols-outlined contact-icon">
                mail
              </span>
              <a href="mailto:sales@impactsoft.co.il">sales@impactsoft.co.il</a>
            </div>

            <div className="detail">
              <span className="material-symbols-outlined contact-icon">
                call
              </span>
              <a href={`tel:${t("contact-phone")}`}>{t("contact-phone")}</a>
            </div>
          </div>

          <div className="info-img">
            <img src={contactImg} alt="Contact illustration" />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
