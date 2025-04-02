import React, { useEffect } from "react";

import InputUi from "./InputUi";

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const [advanceCounter, setAdvanceCounter] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  // const [anotherValue,setAnotherValue] = React.useState(0);

  // console.log("counter", counter);
  // let count = 0;

  const handleIncrement = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 800);
    // count++;
    // console.log(count);
  };

  const handleDecrement = () => {
    setTimeout(() => {
      setCounter(counter - 1);
    }, 800);
  };

  const handleAdvanceIncrement = () => {
    setTimeout(() => {
      setAdvanceCounter((prev) => prev + 1);
    }, 800);
  };

  const handleAdvanceDecrement = () => {
    setTimeout(() => {
      setAdvanceCounter((prev) => prev - 1);
    }, 800);
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log("mounting");
    alert("mounting");
  }, []);

  useEffect(() => {
    alert("advanceCounter");
  }, []);

  return (
    <>
      <div>
        <p>My counter simple</p>
        <p>{counter}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <p> My advance counter</p>
        <p>{advanceCounter}</p>
        <button onClick={handleAdvanceIncrement}>+</button>
        <button onClick={handleAdvanceDecrement}>-</button>
      </div>
      {inputValue}
      <button onClick={() => setVisible((prev) => !prev)}>{visible ? 'close input' : 'open input'}</button>
      {visible && <InputUi handleInputValue={handleInputValue} />}
    </>
  );
};
