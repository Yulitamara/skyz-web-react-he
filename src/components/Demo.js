import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import KanbanGroup from "./KanbanGroup";
import "../assets/scss/_skyz-demo.scss";
import { useTranslation } from "react-i18next";

const Demo = () => {
const { t } = useTranslation();

  const initialData = {
    tasks: {
      task1: { titleKey: "kanban-task", descriptionKey: "kanban-advertising-campaign", pKey: "kanban-advertising-campaign-content", date: "12/12/23", groupKey: "kanban-marketing", peopleKey: "kanban-shirley" },
      task2: { titleKey: "kanban-task", descriptionKey: "kanban-meeting", pKey: "kanban-meeting-content", date: "1/1/24", groupKey: "kanban-sales", peopleKey: "kanban-dor" },
      task3: { titleKey: "kanban-task", descriptionKey: "kanban-meeting", pKey: "kanban-meeting-content", date: "1/1/24", groupKey: "kanban-sales", peopleKey: "kanban-dor" },
      task4: { titleKey: "kanban-task", descriptionKey: "kanban-meeting", pKey: "kanban-meeting-content", date: "1/1/24", groupKey: "kanban-sales", peopleKey: "kanban-dor" },
      task5: { titleKey: "kanban-task", descriptionKey: "kanban-meeting", pKey: "kanban-meeting-content", date: "1/1/24", groupKey: "kanban-sales", peopleKey: "kanban-dor" },
      task6: { titleKey: "kanban-task", descriptionKey: "kanban-meeting", pKey: "kanban-meeting-content", date: "1/1/24", groupKey: "kanban-sales", peopleKey: "kanban-dor" },
      task7: { titleKey: "kanban-task", descriptionKey: "kanban-meeting", pKey: "kanban-meeting-content", date: "1/1/24", groupKey: "kanban-sales", peopleKey: "kanban-dor" },
    },
    columns: {
      // קבוצה 1 (פתוח)
      col2: { id: "col2", title: "ביצוע", subtitleKey: "kanban-offer", taskIds: ["task1"] },
      col3: { id: "col3", title: "סגור", subtitleKey: "kanban-order", taskIds: ["task2"] },
      // קבוצה 2 (בתהליך)
      col5: { id: "col5", title: "ביצוע", subtitleKey: "kanban-inprogress", taskIds: ["task3"] },
      col6: { id: "col6", title: "סגור", subtitleKey: "kanban-pending", taskIds: ["task4"] },
      // קבוצה 3 (סגור)
      col7: { id: "col7", title: "סגור", subtitleKey: "kanban-completed", taskIds: ["task5"] },
      col9: { id: "col9", title: "סגור", subtitleKey: "kanban-cancelled", taskIds: ["task6"] }
    },
    groups: {
      group1: { id: "group1", titleKey: "kanban-open", className: "kanban-1", columnOrder: ["col2", "col3"] },
      group2: { id: "group2", titleKey: "kanban-ongoing", className: "kanban-2", columnOrder: ["col5", "col6"] },
      group3: { id: "group3", titleKey: "kanban-closed", className: "kanban-3", columnOrder: ["col7", "col9"] }
    },
    groupOrder: ["group1", "group2", "group3"]
  };

  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newData = { ...data };
    const sourceColumn = newData.columns[source.droppableId];
    const destinationColumn = newData.columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      sourceColumn.taskIds = newTaskIds;
    } else {
      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      sourceTaskIds.splice(source.index, 1);

      const destTaskIds = Array.from(destinationColumn.taskIds);
      destTaskIds.splice(destination.index, 0, draggableId);

      sourceColumn.taskIds = sourceTaskIds;
      destinationColumn.taskIds = destTaskIds;
    }

    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="demo">
      <div className="kanban-wrapper">
      <div className="kanban-container">
        {data.groupOrder.map((groupId) => {
          const group = data.groups[groupId];
          const columns = group.columnOrder.map((colId) => data.columns[colId]);
          return (
            <KanbanGroup
              key={group.id}
              group={group}
              columns={columns}
              tasks={data.tasks}
            />
          );
        })}
      </div>
      </div>
      </div>
    </DragDropContext>
  );
};

export default Demo;
