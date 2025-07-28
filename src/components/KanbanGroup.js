import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { useTranslation } from "react-i18next";

const KanbanGroup = ({ group, columns, tasks }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={`kanban ${isMinimized ? "minimize" : ""}`}>
      <div
        className={`main-title ${group.className}`}
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <h2>{t(group.titleKey)}</h2>
        <span className="material-symbols-outlined close-btn">
          {isMinimized ? "expand_content" : "close"}
        </span>
      </div>

      <div className={`columns-container ${isMinimized ? "hidden" : ""}`}>
        {columns.map((col) => (
          <KanbanColumn
            key={col.id}
            columnId={col.id}
            tasks={{ columns: { [col.id]: col }, tasks }}
            subtitle={col.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanGroup;
