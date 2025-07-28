import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "../assets/scss/_kanban.scss";
import KanbanColumn from "./KanbanColumn";

const Kanban = ({ initialData, mainTitleClass }) => {
  const [tasks, setTasks] = useState(initialData);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = () => setIsDragging(true);

  const onDragEnd = (result) => {
    setIsDragging(false);

    const { destination, source, draggableId } = result;

    if (!destination ||
      (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }

    const newTasks = JSON.parse(JSON.stringify(tasks));
    const sourceColumn = newTasks.columns[source.droppableId];
    const destinationColumn = newTasks.columns[destination.droppableId];

    sourceColumn.taskIds.splice(source.index, 1);
    destinationColumn.taskIds.splice(destination.index, 0, draggableId);

    setTasks(newTasks);
  };

  const firstColumnKey = Object.keys(tasks.columns)[0];
  const mainTitle = firstColumnKey ? tasks.columns[firstColumnKey].title : "Kanban";

  const handleToggleMinimize = () => {
    if (isDragging) return; // לא משנים מצב בזמן גרירה
    setIsMinimized((prev) => !prev);
  };

 return (
  <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
    <div className="kanban-container">
      <div className="kanban-wrapper"> {/* דיב חדש */}
        <div className={`kanban ${isMinimized ? "minimize" : ""}`}>
          <div
            className={`main-title ${mainTitleClass}`}
            onClick={handleToggleMinimize}
          >
            <h2>{mainTitle}</h2>
            <span className="material-symbols-outlined close-btn">
              {isMinimized ? "expand_content" : "close"}
            </span>
          </div>

          {/* לא נעלם מה-DOM, רק משנה עיצוב */}
          <div className={`columns-container ${isMinimized ? "hidden" : ""}`}>
            {Object.keys(tasks.columns).map((columnId) => (
              <KanbanColumn
                key={columnId}
                columnId={columnId}
                tasks={tasks}
                subtitle={tasks.columns[columnId].subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </DragDropContext>
);

};

export default Kanban;
