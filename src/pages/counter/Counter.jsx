import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counter?.count);

  const handleIncrement = () => {
    dispatch(counterActions.incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrementCounter());
  };

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
