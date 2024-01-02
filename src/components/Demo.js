import React, { useRef } from "react";
import "../assets/scss/_skyz-demo.scss";
import Kanban from "./Kanban";

const Demo = () => {
  const kanbanData1 = {
    columns: {
      columnId: {
        title: "פתוח",
        subtitle: "פוטנציאלי",
        taskIds: ["task1", "task2", "task3"],
      },
      columnId2: {
        title: "ביצוע",
        subtitle: "הצעה",
        taskIds: ["task4", "task5", "task6"],
      },
      columnId3: {
        title: "סגור",
        subtitle: "הזמנה",
        taskIds: ["task7", "task8", "task9"],
      },
    },
    tasks: {
      task1: {
        title: "הזדמנות",
        description: "עדכון שדה מקור מששני בכרטסת לקוחות",
        p: "בזמן תהליך הכנסת הלידים. השדה יהיה מעודכן בהתאם לליד האחרון שהתקבל עבור אותו לקוח",
        date: "12/12/23",
        sum: "$210,00",
        people: "משה, דוד, שלמה",
      },
      task2: {
        title: "הזדמנות",
        description: "שדרוג גולדפלוס",
        p: "שדרוג האפליקציה ומסד הנתונים לגרסה מתקדמת מ-2008. ידרוש גישה מרחוק.",
        date: "1/1/24",
        sum: "$210,00",
        people: `מיטב השקעות בע"מ, סילבינה בצלאל`,
      },
      task4: {
        title: "הזדמנות",
        description: "גולדפלוס/סקייז",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `אורלי בסביבה ציפורי בע"מ, אורלי סרוסי זהר`,
      },
      task5: {
        title: "הזדמנות",
        description: `התאמות סקייז לעמותה חדשה "קרן ידע"`,
        p: "התאמות על בסיס סקייז שפותח לעמותה לקידום מקצועי של עובדי המדינה. הצעה סופית רק לאחר אפיון.",
        date: "12/12/24",
        sum: "$210,00",
        people: "העמותה לקידום מקצועי של עובדי המדינה, עידית כהן",
      },
      task7: {
        title: "הזדמנות",
        description: "פיצול מסד נתונים ל-2 מסדים",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `המכללה האקדמית כנרת בעמק הירדן, ענבל עבו`,
      },
      task8: {
        title: "הזדמנות",
        description: "העברת שרתים",
        p: "העברת שתי מערכות גולדפלוס עמיתים וגולדפלוס סוכנים. התאמת הגדרות לכור תדיראן שרת VM. נדרש יצירת קישור והוספה לsecurity group בAD + מיפוי כונן לתיקייה של הגולדפלוס לשתי המערכות. הגדרת מערכת לעבודה בSSO. חיבור כל מסדי הנתונים. נושא הSSIS לא נכלל בהעברה. וגם שרתי הפצה. המערכת מיועדת לקריאה בלבד.",
        date: "12/12/24",
        sum: "$210,00",
        people: `הילה קולנגי, הפניקס חברה לביטוח בע"מ`,
      },
      task9: {
        title: "הזדמנות",
        description: "חוזה שירות גולדפלוס",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `תאגיד הבריאות -רמב"ם`,
      },
    },
  };

  const kanbanData2 = {
    columns: {
      columnId: {
        title: "בתהליך",
        subtitle: "זכיה",
        taskIds: ["task1", "task2", "task3"],
      },
      columnId2: {
        title: "ביצוע",
        subtitle: "בעבודה",
        taskIds: ["task4", "task5", "task6"],
      },
      columnId3: {
        title: "סגור",
        subtitle: "בהמתנה",
        taskIds: ["task7", "task8", "task9"],
      },
    },
    tasks: {
      task1: {
        title: "הזדמנות",
        description: `עדכון שדה מקור משני ב"כרטסת לקוחות"`,
        p: "בזמן תהליך הכנסת הלידים. השדה יהיה מעודכן בהתאם לליד האחרון שהתקבל עבור אותו לקוח.",
        date: "12/12/24",
        sum: "$210,00",
        people: "משה, דוד, שלמה",
      },
      task2: {
        title: "הזדמנות",
        description: "שדרוג גולדפלוס",
        p: "שדרוג האפליקציה ומסד הנתונים לגרסה מתקדמת מ-2008. ידרוש גישה מרחוק.",
        date: "1/1/24",
        sum: "$210,00",
        people: `מיטב השקעות בע"מ, סילבינה בצלאל`,
      },
      task4: {
        title: "הזדמנות",
        description: "גולדפלוס/סקייז",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `אורלי בסביבה ציפורי בע"מ, אורלי סרוסי זהר`,
      },
      task5: {
        title: "הזדמנות",
        description: `התאמות סקייז לעמותה חדשה "קרן ידע"`,
        p: "התאמות על בסיס סקייז שפותח לעמותה לקידום מקצועי של עובדי המדינה. הצעה סופית רק לאחר אפיון.",
        date: "12/12/24",
        sum: "$210,00",
        people: "העמותה לקידום מקצועי של עובדי המדינה, עידית כהן",
      },
      task7: {
        title: "הזדמנות",
        description: "פיצול מסד נתונים ל-2 מסדים",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `המכללה האקדמית כנרת בעמק הירדן, ענבל עבו`,
      },
      task8: {
        title: "הזדמנות",
        description: "העברת שרתים",
        p: "העברת שתי מערכות גולדפלוס עמיתים וגולדפלוס סוכנים. התאמת הגדרות לכור תדיראן שרת VM. נדרש יצירת קישור והוספה לsecurity group בAD + מיפוי כונן לתיקייה של הגולדפלוס לשתי המערכות. הגדרת מערכת לעבודה בSSO. חיבור כל מסדי הנתונים. נושא הSSIS לא נכלל בהעברה. וגם שרתי הפצה. המערכת מיועדת לקריאה בלבד.",
        date: "12/12/24",
        sum: "$210,00",
        people: `הילה קולנגי, הפניקס חברה לביטוח בע"מ`,
      },
      task9: {
        title: "הזדמנות",
        description: "חוזה שירות גולדפלוס",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `תאגיד הבריאות -רמב"ם`,
      },
    },
  };

  const kanbanData3 = {
    columns: {
      columnId: {
        title: "סגור",
        subtitle: "בוצע",
        taskIds: ["task1", "task2", "task3"],
      },
      columnId2: {
        title: "ביצוע",
        subtitle: "זכיה - הסתים",
        taskIds: ["task4", "task5", "task6"],
      },
      columnId3: {
        title: "סגור",
        subtitle: "הקפאה",
        taskIds: ["task7", "task8", "task9"],
      },
      columnId4: {
        title: "סגור",
        subtitle: "הפסד",
        taskIds: ["task10", "task11", "task12"],
      },
      columnId5: {
        title: "סגור",
        subtitle: "מבוטל",
        taskIds: ["task13", "task14", "task15"],
      },
    },
    tasks: {
      task1: {
        title: "הזדמנות",
        description: `עדכון שדה מקור משני ב"כרטסת לקוחות"`,
        p: "בזמן תהליך הכנסת הלידים. השדה יהיה מעודכן בהתאם לליד האחרון שהתקבל עבור אותו לקוח.",
        date: "12/12/24",
        sum: "$210,00",
        people: "משה, דוד, שלמה",
      },
      task2: {
        title: "הזדמנות",
        description: "שדרוג גולדפלוס",
        p: "שדרוג האפליקציה ומסד הנתונים לגרסה מתקדמת מ-2008. ידרוש גישה מרחוק.",
        date: "1/1/24",
        sum: "$210,00",
        people: `מיטב השקעות בע"מ, סילבינה בצלאל`,
      },
      task4: {
        title: "הזדמנות",
        description: "גולדפלוס/סקייז",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `אורלי בסביבה ציפורי בע"מ, אורלי סרוסי זהר`,
      },
      task5: {
        title: "הזדמנות",
        description: `התאמות סקייז לעמותה חדשה "קרן ידע"`,
        p: "התאמות על בסיס סקייז שפותח לעמותה לקידום מקצועי של עובדי המדינה. הצעה סופית רק לאחר אפיון.",
        date: "12/12/24",
        sum: "$210,00",
        people: "העמותה לקידום מקצועי של עובדי המדינה, עידית כהן",
      },
      task7: {
        title: "הזדמנות",
        description: "פיצול מסד נתונים ל-2 מסדים",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `המכללה האקדמית כנרת בעמק הירדן, ענבל עבו`,
      },
      task8: {
        title: "הזדמנות",
        description: "העברת שרתים",
        p: "העברת שתי מערכות גולדפלוס עמיתים וגולדפלוס סוכנים. התאמת הגדרות לכור תדיראן שרת VM. נדרש יצירת קישור והוספה לsecurity group בAD + מיפוי כונן לתיקייה של הגולדפלוס לשתי המערכות. הגדרת מערכת לעבודה בSSO. חיבור כל מסדי הנתונים. נושא הSSIS לא נכלל בהעברה. וגם שרתי הפצה. המערכת מיועדת לקריאה בלבד.",
        date: "12/12/24",
        sum: "$210,00",
        people: `הילה קולנגי, הפניקס חברה לביטוח בע"מ`,
      },
      task9: {
        title: "הזדמנות",
        description: "חוזה שירות גולדפלוס",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `תאגיד הבריאות -רמב"ם`,
      },
      task13: {
        title: "הזדמנות",
        description: "חוזה שירות גולדפלוס",
        p: "",
        date: "12/12/24",
        sum: "$210,00",
        people: `תאגיד הבריאות -רמב"ם`,
      },
    },
  };

  return (
    <div className="skyz-demo">
      <div className="demo-container">
        <div className="skyz-demo__main">
          <div className="card-container">
            <div className="card">
              <div className="kanban-container">
                <Kanban initialData={kanbanData1} mainTitleClass="kanban-1" />
                <Kanban initialData={kanbanData2} mainTitleClass="kanban-2" />
                <Kanban initialData={kanbanData3} mainTitleClass="kanban-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
