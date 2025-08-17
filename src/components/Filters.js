// Filters.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Filters = ({ onSelectFilter }) => {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    if (filter === "all") {
      // בלי סינון בכלל
      setSelectedFilters([]);
      onSelectFilter([]);
    } else {
      setSelectedFilters([filter]);
      onSelectFilter([filter]);
    }
  };

  return (
    <div className="filters">
      <button
        className={selectedFilters.length === 0 ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("all")}
      >
        {t("filter-all-articles")}
      </button>

      <button
        className={selectedFilters.includes("CRM") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("CRM")}
      >
        CRM
      </button>

      <button
        className={selectedFilters.includes("הצלחת לקוח") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("הצלחת לקוח")}
      >
        {t("filter-customer-success")}
      </button>

      <button
        className={selectedFilters.includes("מכירות") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("מכירות")}
      >
        {t("filter-sales")}
      </button>

      <button
        className={selectedFilters.includes("ניהול לקוחות") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("ניהול לקוחות")}
      >
        {t("filter-customer-management")}
      </button>

      <button
        className={selectedFilters.includes("שיווק") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("שיווק")}
      >
        {t("filter-marketing")}
      </button>

      <button
        className={selectedFilters.includes("שירות") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("שירות")}
      >
        {t("filter-service")}
      </button>
    </div>
  );
};

export default Filters;
