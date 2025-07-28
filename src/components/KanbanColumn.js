import { Droppable } from "react-beautiful-dnd";
import "../assets/scss/_kanban.scss";
import KanbanTask from "./KanbanTask";
import { useTranslation } from "react-i18next";

const KanbanColumn = ({ columnId, tasks, subtitle }) => {
  const { t } = useTranslation();
  const column = tasks.columns[columnId];
  if (!column) return null;

  return (
    <Droppable droppableId={columnId} type="TASK">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`kanban-column ${snapshot.isDraggingOver ? "drag-over" : ""}`}
        >
          <h3>
            {column.subtitleKey ? t(column.subtitleKey) : subtitle}
          </h3>
          <div className={`kanban-tasks-list ${snapshot.isDraggingOver ? "highlight-drop" : ""}`}>
            {column.taskIds.map((taskId, index) => (
              <KanbanTask
                key={taskId}
                taskId={taskId}
                task={tasks.tasks[taskId]}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default KanbanColumn;
