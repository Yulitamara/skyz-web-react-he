import "../assets/scss/_navigation.scss";
import logo from "../assets/imgs/Skyz-logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "En" },
  he: {
    nativeName: "He",
  },
};

const Navbar = ({ onToggleDarkMode, darkMode }) => {
  const [menuActive, setMenuActive] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    // click event listener when the component mounts
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuActive(false); // Close the navbar when clicked outside
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Function to close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setMenuActive(false);
  };

  const { t, i18n } = useTranslation();

  return (
    <header className="navbar" ref={navbarRef}>
      <Link to="/">
        <img src={logo} alt="skyz-logo" className="logo" />
      </Link>
      <div className={`links ${menuActive && "active"}`}>
        <Link to="/" className="link" onClick={handleMenuItemClick}>
          {t("nav-home")}
        </Link>
        <Link to="/about" className="link" onClick={handleMenuItemClick}>
          {t("nav-about")}
        </Link>
        <Link
          to="https://crm-erp.co.il/planc2/logon/?lang=102"
          className="link"
          onClick={handleMenuItemClick}
        >
          {t("nav-login")}
        </Link>
        <Link to="/contact" className="link" onClick={handleMenuItemClick}>
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
    </header>
  );
};

export default Navbar;
