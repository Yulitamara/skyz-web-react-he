import { Draggable } from "react-beautiful-dnd";
import "../assets/scss/_kanban.scss";

const KanbanTask = ({ taskId, task, index }) => {
  if (!task) {
    // If task data is not available, do not render the task
    return null;
  }

  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="kanban-task"
        >
          <div className="task-title-container">
            <span>{task.title}</span>
            {task.date && <span className="date">{task.date}</span>}
          </div>
          <div className="task-content">
            {task.description && <h3>{task.description}</h3>}
            {task.p && <p>{task.p}</p>}
          </div>

          <div className="task-title-container">
            {task.date && <span className="date">{task.sum}</span>}
            <span>{task.people}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanTask;
