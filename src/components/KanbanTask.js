import { Draggable } from "react-beautiful-dnd";
import "../assets/scss/_kanban.scss";

const KanbanTask = ({ taskId, task, index }) => {
  if (!task) return null;

  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`kanban-task ${snapshot.isDragging ? "dragging" : ""}`}
        >
          {/* כותרת המשימה */}
          <div className="task-title-container">
            {task.title && <span>{task.title}</span>}
            {task.date && <span className="date">{task.date}</span>}
          </div>

          {/* תוכן המשימה */}
          <div className="task-content">
            {task.description && <h3>{task.description}</h3>}
            {task.p && <p>{task.p}</p>}
          </div>

          {/* מידע נוסף */}
          <div className="task-title-container">
            {task.sum && <span className="sum">{task.sum}</span>}
            {task.people && <span>{task.people}</span>}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanTask;
