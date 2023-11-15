// Filters.js
import React, { useState } from "react";

const Filters = ({ onSelectFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    // Clear selectedFilters and set the new selected filter
    setSelectedFilters([filter]);

    onSelectFilter([filter]); // Pass the selected filter to the parent component
  };

  return (
    <div className="filters">
      <button
        className={
          selectedFilters.length === 0 || selectedFilters.includes("all")
            ? "filter-clicked"
            : ""
        }
        onClick={() => handleFilterClick("all")}
      >
        כל המאמרים
      </button>
      <button
        className={selectedFilters.includes("CRM") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("CRM")}
      >
        CRM
      </button>
      <button
        className={
          selectedFilters.includes("הצלחת לקוח") ? "filter-clicked" : ""
        }
        onClick={() => handleFilterClick("הצלחת לקוח")}
      >
        הצלחת לקוח
      </button>
      <button
        className={selectedFilters.includes("מכירות") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("מכירות")}
      >
        מכירות
      </button>
      <button
        className={
          selectedFilters.includes("ניהול לקוחות") ? "filter-clicked" : ""
        }
        onClick={() => handleFilterClick("ניהול לקוחות")}
      >
        ניהול לקוחות
      </button>
      <button
        className={selectedFilters.includes("שיווק") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("שיווק")}
      >
        שיווק
      </button>
      <button
        className={selectedFilters.includes("שירות") ? "filter-clicked" : ""}
        onClick={() => handleFilterClick("שירות")}
      >
        שירות
      </button>
    </div>
  );
};

export default Filters;
