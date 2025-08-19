import "../assets/scss/_navigation.scss";
import logo from "../assets/imgs/Skyz-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import AccessibilityWidget from "./AccessibilityWidget"; // ← חדש

const lngs = {
  en: { nativeName: "En" },
  he: { nativeName: "He" },
};

const Navbar = ({ onToggleDarkMode, darkMode }) => {
  const [menuActive, setMenuActive] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuActive(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleMenuItemClick = () => setMenuActive(false);

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="navbar" ref={navbarRef}>
      <Link to="/">
        <img src={logo} alt="skyz-logo" className="logo" />
      </Link>

      <div className={`links ${menuActive ? "active" : ""}`}>
        <Link to="/" className="link" onClick={handleMenuItemClick}>
          {t("nav-home")}
        </Link>

        <Link to="/בלוג/" className="link" onClick={handleMenuItemClick}>
          {t("blog")}
        </Link>

        <Link
          to="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/"
          className="link"
          onClick={handleMenuItemClick}
        >
          {t("nav-about")}
        </Link>

        <Link
          to="https://crm-erp.co.il/planc2/logon/?lang=102"
          className="link"
          onClick={handleMenuItemClick}
        >
          {t("nav-login")}
        </Link>

        <Link
          to="/skyzcrm-ניהול-קשרי-לקוחות/צור-קשר/"
          className="link"
          onClick={handleMenuItemClick}
        >
          {t("nav-contact")}
        </Link>

        <span
          className="material-symbols-outlined darkmode-toggle"
          onClick={onToggleDarkMode}
        >
          {darkMode ? "light_mode" : "dark_mode"}
        </span>

        <div className="lang">
          {Object.keys(lngs).map((lng) => (
            <button
              className={`lang-btn ${
                i18n.resolvedLanguage === lng ? "disabled" : ""
              }`}
              type="submit"
              key={lng}
              onClick={() => i18next.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>

      <span
        className="material-symbols-outlined menu-icon"
        onClick={() => setMenuActive(!menuActive)}
      >
        menu
      </span>

      {/* ← כאן הווידג'ט יישב בדסקטופ; במובייל הוא יצוף בפינה התחתונה */}
      <div className="a11y-slot">
        <AccessibilityWidget />
      </div>
    </header>
  );
};

export default Navbar;
