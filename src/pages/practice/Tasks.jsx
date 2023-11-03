import { useState } from "react";

const Tasks = () => {
  const [circles, setCircles] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const onADDcircle = () => {
    const newCricle = { count: 0, selected: false };
    setCircles((prev) => [...prev, newCricle]);
  };
  const onClickCircle = (circle) => {
    const updatedCircle = circles.map((c) => {
      if (c === circle) {
        c.selected = !c.selected;
        c.count = c.selected ? c.count + 1 : c.count - 1;
      }
      return c;
    });

    setCircles(updatedCircle);

    const selectedCircles = updatedCircle.filter((val) => val.selected);
    const newTotalCount = selectedCircles.reduce(
      (sum, val) => sum + val.count,
      0
    );
    setTotalCount(newTotalCount);
  };

  const toggleBtn = (circle) => {
    return {
      backgroundColor: circle.selected ? "green" : "transparent",
      width: "5rem",
      height: "5rem",
      borderRadius: "50%",
      margin: "10px",
      border: "1px solid red",
    };
  };
  return (
    <div className="App">
      <button onClick={onADDcircle}>Add Circle </button>
      <div>count :{totalCount}</div>
      {circles.map((circle, inx) => {
        return (
          <div key={inx}>
            <div
              style={toggleBtn(circle)}
              onClick={() => onClickCircle(circle)}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
export default Tasks;
