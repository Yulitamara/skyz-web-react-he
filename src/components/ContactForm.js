import React from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const contactForm = e.target; // Get the form element
    const contactName = contactForm.querySelector('input[name="user_name"]');
    const contactEmail = contactForm.querySelector('input[name="user_email"]');
    const contactMessage = contactForm.querySelector(
      'textarea[name="message"]'
    );
    const contactPhone = contactForm.querySelector('input[name="phone"]');
    const contactOrganization = contactForm.querySelector(
      'input[name="organization"]'
    );
    const contactError = contactForm.querySelector("#contact-error");

    // Check if the field has a value
    if (
      contactName.value === "" ||
      contactEmail.value === "" ||
      contactMessage.value === "" ||
      contactPhone.value === ""
    ) {
      // Add and remove color
      contactError.classList.remove("color-blue");
      contactError.classList.add("color-red");

      // Show message
      contactError.textContent = "Write all the input fields 📥";
    } else {
      // serviceID - templateID - #form - publickey
      emailjs
        .sendForm(
          "service_ky4w1yd", // Replace with your service ID
          "template_fa15r54", // Replace with your template ID
          "#contact-form",
          "rexvJSVw22UHGT0HS" // Replace with your user ID (public key)
        )
        .then(
          () => {
            // Show message and add color
            contactError.classList.add("color-blue");
            contactError.textContent = "Message sent ✅";

            // Remove message after five seconds
            setTimeout(() => {
              contactError.textContent = "";
            }, 5000);
          },
          (error) => {
            alert("OOPS! SOMETHING HAS FAILED...", error);
          }
        );

      // To clear the input field
      contactName.value = "";
      contactEmail.value = "";
      contactMessage.value = "";
      contactPhone.value = "";
      contactOrganization.value = "";
    }
  };

  const { t } = useTranslation();
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
          <textarea name="message" id="message" className="input"></textarea>
        </div>
        <p className="contact__error" id="contact-error"></p>
      </div>
      <input
        type="submit"
        value={t("send-btn")}
        className="btn btn-orange"
        onSubmit={sendEmail}
      />
    </form>
  );
};
