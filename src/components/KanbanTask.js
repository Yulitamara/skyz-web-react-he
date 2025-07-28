import { Draggable } from "react-beautiful-dnd";
import "../assets/scss/_kanban.scss";
import { useTranslation } from "react-i18next";

const KanbanTask = ({ taskId, task, index }) => {
  const { t } = useTranslation();

  if (!task) return null;

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
            <span>{task.titleKey ? t(task.titleKey) : task.title}</span>
            {task.date && <span className="date">{task.date}</span>}
          </div>

          <div className="task-content">
            {(task.descriptionKey || task.description) && (
              <h3>{task.descriptionKey ? t(task.descriptionKey) : task.description}</h3>
            )}
            {(task.pKey || task.p) && (
              <p>{task.pKey ? t(task.pKey) : task.p}</p>
            )}
          </div>

      <div className="task-title-container">
  {task.groupKey && <span className="date">{t(task.groupKey)}</span>}
  {(task.peopleKey || task.people) && (
    <span>{task.peopleKey ? t(task.peopleKey) : task.people}</span>
  )}
</div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanTask;
