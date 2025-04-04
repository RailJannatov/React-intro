import React, { useState } from "react";

const BadKeyExample = () => {
  const [inputs, setInputs] = useState([""]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAdd = () => {
    setInputs((prev) => [...prev, ""]);
  };

  const handleRemove = (indexToRemove) => {
    setInputs((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">🚫 Pis Nümunə: key = index</h2>
      {inputs.map((val, index) => (
        <div key={index} className="flex gap-2">
          <input
            className="border p-2"
            value={val}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button
            className="bg-red-500 text-white px-2"
            onClick={() => handleRemove(index)}
          >
            Sil
          </button>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleAdd}
      >
        Input əlavə et
      </button>
    </div>
  );
};

export default BadKeyExample;
