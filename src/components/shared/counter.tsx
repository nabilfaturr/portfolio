"use client";
import React from "react";
import { Button } from "../ui/button";

const MyCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleCounterPlus = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleCounterMinus = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div className="flex gap-3 items-center border w-fit px-4 py-2 rounded">
      <Button variant={"outline"} size={"icon"} onClick={handleCounterMinus}>
        -
      </Button>
      <span>{counter}</span>

      <Button variant={"outline"} size={"icon"} onClick={handleCounterPlus}>
        +
      </Button>
    </div>
  );
};

export default MyCounter;
