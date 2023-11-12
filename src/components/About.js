import "../assets/scss/_about.scss";
import "../assets/scss/base.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <h2>{t("about-header")}</h2>
      <p>{t("about-content")}</p>
    </section>
  );
};

export default About;
