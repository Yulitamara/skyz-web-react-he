import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "../assets/scss/_kanban.scss";
import KanbanColumn from "./KanbanColumn";

const Kanban = ({ initialData, mainTitleClass }) => {
  const [tasks, setTasks] = useState(initialData);
  const [isMinimized, setIsMinimized] = useState(false);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const newTasks = { ...tasks };
    const sourceColumn = newTasks.columns[source.droppableId];
    const destinationColumn = newTasks.columns[destination.droppableId];

    sourceColumn.taskIds.splice(source.index, 1);
    destinationColumn.taskIds.splice(destination.index, 0, draggableId);

    setTasks(newTasks);
  };

  const mainTitle = tasks.columns.columnId
    ? tasks.columns.columnId.title
    : "Default Title";

  const handleToggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`kanban ${isMinimized ? "minimize" : ""}`}>
        <div
          className={`main-title ${mainTitleClass}`}
          onClick={handleToggleMinimize}
        >
          <span></span>
          <h2>{mainTitle}</h2>
          <span className="material-symbols-outlined close-btn">
            {isMinimized ? "expand_content" : "close"}
          </span>
        </div>
        <div className="columns-container">
          {Object.keys(tasks.columns).map((columnId) => (
            <KanbanColumn
              key={columnId}
              columnId={columnId}
              tasks={tasks}
              subtitle={tasks.columns[columnId].subtitle}
              titleClassName={`title-${columnId}`}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Kanban;
