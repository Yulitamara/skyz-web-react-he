import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import KanbanGroup from "./KanbanGroup";
import "../assets/scss/_skyz-demo.scss";
import { useTranslation } from "react-i18next";

const Demo = () => {
const { t } = useTranslation();

  const initialData = {
    tasks: {
      task1: { title: "הזדמנות", description: "עדכון שדה מקור משני בכרטסת לקוחות", p: "בזמן תהליך הכנסת הלידים...", date: "12/12/23", sum: "$210,00", people: "משה, דוד, שלמה" },
      task2: { title: "הזדמנות", description: "שדרוג גולדפלוס", p: "שדרוג האפליקציה ומסד הנתונים...", date: "1/1/24", sum: "$210,00", people: "מיטב השקעות בע\"מ" },
      task3: { title: "הזדמנות", description: "גולדפלוס/סקייז", p: "", date: "12/12/24", sum: "$210,00", people: "אורלי סרוסי" },
      task4: { title: "הזדמנות", description: "התאמות סקייז לעמותה", p: "התאמות על בסיס סקייז...", date: "12/12/24", sum: "$210,00", people: "עמותת קרן" },
      task5: { title: "הזדמנות", description: "פיצול מסד נתונים ל-2 מסדים", p: "", date: "12/12/24", sum: "$210,00", people: "המכללה האקדמית כנרת" },
      task6: { title: "הזדמנות", description: "חוזה שירות גולדפלוס", p: "", date: "12/12/24", sum: "$210,00", people: "תאגיד הבריאות -רמב\"ם" }
    },
    columns: {
      // קבוצה 1 (פתוח)
      col2: { id: "col2", title: "ביצוע", subtitle: "הצעה", taskIds: ["task3"] },
      col3: { id: "col3", title: "סגור", subtitle: "הזמנה", taskIds: ["task1", "task2"] },
      // קבוצה 2 (בתהליך)
      col5: { id: "col5", title: "ביצוע", subtitle: "בעבודה", taskIds: ["task4"] },
      col6: { id: "col6", title: "סגור", subtitle: "בהמתנה", taskIds: [] },
      // קבוצה 3 (סגור)
      col7: { id: "col7", title: "סגור", subtitle: "בוצע", taskIds: ["task5"] },
      col9: { id: "col9", title: "סגור", subtitle: "מבוטל", taskIds: ["task6"] }
    },
    groups: {
      group1: { id: "group1",  titleKey: "kanban-open", className: "kanban-1", columnOrder: ["col2", "col3"] },
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
