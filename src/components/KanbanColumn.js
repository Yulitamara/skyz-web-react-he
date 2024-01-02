import { Droppable } from "react-beautiful-dnd";
import "../assets/scss/_kanban.scss";
import KanbanTask from "./KanbanTask";

const KanbanColumn = ({ columnId, tasks, subtitle, titleClassName }) => {
  const column = tasks.columns[columnId];

  if (!column) {
    return null;
  }

  return (
    <div>

      <Droppable droppableId={columnId} type="TASK">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="kanban-column"
          >
            <h3>{subtitle}</h3>
            <div className="kanban-tasks-list">
              {column.taskIds.map((taskId, index) => (
                <KanbanTask
                  key={taskId}
                  taskId={taskId}
                  task={tasks.tasks[taskId]}
                  index={index}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;

