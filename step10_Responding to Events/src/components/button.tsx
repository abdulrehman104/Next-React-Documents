"use client";
import { Children, useState } from "react";


// Simple Button
export const ButtonSimple = () => {
  const handleClick = () => {
    alert("Danger a head");
  };
  return (
    <div>
      <button onClick={handleClick}>Danger</button>
    </div>
  );
};


// Advance Button
export const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => ++prev);
  };
  return (
    <div>
      <button onClick={handleClick}>Count : {count} </button>
    </div>
  );
};



