// import paraData from "../data/para.json";

const paraData = [
  {
    id: 1,
    title: "title Goes Here",
    content: "content goes here...",
  },
  {
    id: 2,
    title: "Second title Goes Here",
    content: " Second content goes here...",
  },
  {
    id: 3,
    title: "Third title Goes Here",
    content: " Third content goes here...",
  },
];

const Para = () => {
  return (
    <>
      {paraData.map((para) => {
        return (
          <div className="para" key={para.id}>
            <h2>{para.title}</h2>
            <p>{para.content}</p>
            <button>Learn More...</button>
          </div>
        );
      })}
    </>
  );
};

export default Para;
