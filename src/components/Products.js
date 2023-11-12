import salesLight from "../assets/imgs/products-imgs/sales-light.png";
import salesDark from "../assets/imgs/products-imgs/sales-dark.png";
import marketingLight from "../assets/imgs/products-imgs/marketing-light.png";
import marketingDark from "../assets/imgs/products-imgs/marketing-dark.png";
import serviceLight from "../assets/imgs/products-imgs/service-light.png";
import serviceDark from "../assets/imgs/products-imgs/service-dark.png";

import "../assets/scss/_products.scss";
import "../assets/scss/base.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Products = ({ darkMode }) => {
  console.log("Dark Mode:", darkMode);

  const salesImg = darkMode ? salesDark : salesLight;
  const marketingImg = darkMode ? marketingDark : marketingLight;
  const serviceImg = darkMode ? serviceDark : serviceLight;

  const { t } = useTranslation();
  return (
    <section className="products">
      <div className="product">
        <div className="header">
          <img src={salesImg} alt="sales img" />
          <h2>{t("sales-header")}</h2>
        </div>
        <p>{t("sales-content")}</p>
        <Link to="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/">
          <button className="btn-orange">{t("learn-more")}</button>
        </Link>
      </div>
      <div className="product">
        <div className="header">
          <img src={marketingImg} alt="marketing img" />
          <h2>{t("marketing-header")}</h2>
        </div>
        <p>{t("marketing-content")}</p>
        <Link to="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/">
          <button className="btn-orange">{t("learn-more")}</button>
        </Link>
      </div>
      <div className="product">
        <div className="header">
          <img src={serviceImg} alt="service img" />
          <h2>{t("service-header")}</h2>
        </div>
        <p>{t("service-content")}</p>
        <Link to="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/">
          <button className="btn-orange">{t("learn-more")}</button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
