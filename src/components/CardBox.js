import { useState } from "react";

const CardBox = () => {
  const [box, setBox] = useState([
    {
      title: "Connections",
      icon: "link",
      field1: "Figma, employee",
      field2: "Lina Dee",
      field3: "Lina Dee",
      field4: "Max Reynolds, manager",
      id: 1,
    },
    {
      title: "Communication",
      icon: "phone",
      field1: "Work, +972-38728829",
      field2: "Private, +972-52390378",
      id: 2,
    },
    {
      title: "Addresses",
      icon: "home",
      field1: "Halel 90, Jerusalem, 91827",
      field2: "Ben Gurion 24, Remat Gan",
      id: 3,
    },
  ]);
  const [fields, setFields] = useState([
    {
      icon: "stop",
      field1: "Figma, employee",
      field2: "Lina Dee",
      field3: "Lina Dee",
      field4: "Max Reynolds, manager",
      id: 1,
    },
    {
      icon: "stop",
      field1: "Work, +972-38728829",
      field2: "Private, +972-52390378",
      id: 2,
    },
    {
      icon: "stop",
      field1: "Halel 90, Jerusalem, 91827",
      field2: "Ben Gurion 24, Remat Gan",
      id: 3,
    },
  ]);

  return (
    <>
      {box.map((box) => (
        <div className="card__boxes--box" key={box.id}>
          <div className="card__boxes--box__header">
            <div className="card__boxes--box__header--title">
              <span className="material-symbols-outlined">{box.icon}</span>
              <span>{box.title}</span>
            </div>
            <div className="card__boxes--box__header--btns">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
          <div className="card__boxes--box__content">
            <div className="card__boxes--box__content--fields">
              {fields.map((fields) => (
                <>
                  <span>{fields.field1}</span>
                  <span className="material-symbols-outlined stop-icon">
                    {fields.icon}
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBox;
