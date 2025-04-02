import { useEffect } from "react";

const InputUi = ({ handleInputValue }) => {
  useEffect(() => {
    console.log('mount input');
    return () => {
      console.log('unmount input');
    }
  }, []);
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" onChange={handleInputValue} />
    </div>
  );
};

export default InputUi;
