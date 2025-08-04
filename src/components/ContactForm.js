import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{7,15}$/.test(phone);

  const sendEmail = (e) => {
    e.preventDefault();

    const contactForm = e.target;
    const contactName = contactForm.querySelector('input[name="user_name"]');
    const contactEmail = contactForm.querySelector('input[name="user_email"]');
    const contactMessage = contactForm.querySelector('textarea[name="message"]');
    const contactPhone = contactForm.querySelector('input[name="phone"]');
    const contactOrganization = contactForm.querySelector('input[name="organization"]');
    const contactError = contactForm.querySelector("#contact-error");
    const submitButton = contactForm.querySelector('input[type="submit"]');

    contactError.textContent = "";

    if (
      contactName.value === "" ||
      contactEmail.value === "" ||
      contactMessage.value === "" ||
      contactPhone.value === ""
    ) {
      contactError.classList.remove("color-blue");
      contactError.classList.add("color-red");
      contactError.textContent = "Please fill in all required fields 📥";
      return;
    }

    if (!isValidEmail(contactEmail.value)) {
      contactError.classList.remove("color-blue");
      contactError.classList.add("color-red");
      contactError.textContent = "Please enter a valid email address 📧";
      return;
    }

    if (!isValidPhone(contactPhone.value)) {
      contactError.classList.remove("color-blue");
      contactError.classList.add("color-red");
      contactError.textContent = "Please enter a valid phone number 📞";
      return;
    }

    submitButton.disabled = true;
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ky4w1yd",
        "template_fa15r54",
        "#contact-form",
        "rexvJSVw22UHGT0HS"
      )
      .then(() => {
        contactError.classList.remove("color-red");
        contactError.classList.add("color-blue");
        contactError.textContent = "Message sent ✅";

        contactName.value = "";
        contactEmail.value = "";
        contactMessage.value = "";
        contactPhone.value = "";
        contactOrganization.value = "";

        setTimeout(() => {
          contactError.textContent = "";
        }, 5000);
      })
      .catch(() => {
        contactError.classList.remove("color-blue");
        contactError.classList.add("color-red");
        contactError.textContent = "Failed to send. Please try again ❌";
      })
      .finally(() => {
        submitButton.disabled = false;
        setIsLoading(false);
      });
  };

  return (
    <form
      autoComplete="off"
      className="form"
      onSubmit={sendEmail}
      id="contact-form"
    >
      <h2>{t("contact-form-header")}</h2>
      <div className="fields">
        <div className="field-container">
          <div className="label-container">
            <span className="material-symbols-outlined label-icon">person</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input"
              placeholder={t("contact-form-name")}
              required
              name="user_name"
            />
          </div>
        </div>
        <div className="field-container">
          <div className="label-container">
            <span className="material-symbols-outlined label-icon">mail</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input"
              required
              placeholder={t("contact-form-email")}
              name="user_email"
              id="contact-email"
            />
          </div>
        </div>
        <div className="field-container">
          <div className="label-container">
            <span className="material-symbols-outlined label-icon">call</span>
          </div>
          <div className="input-container">
            <input
              type="number"
              className="input"
              required
              placeholder={t("contact-form-phone")}
              id="contact-phone"
              name="phone"
            />
          </div>
        </div>
        <div className="field-container">
          <div className="label-container">
            <span className="material-symbols-outlined label-icon">
              corporate_fare
            </span>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input"
              placeholder={t("contact-form-organization")}
              name="organization"
              id="contact-organization"
            />
          </div>
        </div>
        <div className="textarea">
          <label className="title">{t("contact-form-message")}</label>
          <textarea name="message" id="message" className="input" required></textarea>
        </div>
        <p className="contact__error" id="contact-error"></p>
      </div>
      <input
        type="submit"
        value={isLoading ? t("sending-btn") || "Sending..." : t("send-btn")}
        className="btn btn-orange"
      />
    </form>
  );
};
