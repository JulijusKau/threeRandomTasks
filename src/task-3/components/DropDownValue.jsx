import { useState } from "react";

export const DropDownValue = ({ onClickFunction }) => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ fontSize: "30px", margin: "20px" }}>
      <label htmlFor="N">Choose a number for N value:</label>
      <select
        style={{ fontSize: "30px", margin: "20px" }}
        id="N"
        name="N"
        value={value}
        onChange={handleChange}
      >
        <option value={1}>1</option>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={7}>7</option>
        <option value={9}>9</option>
        <option value={11}>11</option>
      </select>
      <button
        style={{ fontSize: "30px", margin: "20px" }}
        onClick={onClickFunction}
        value={value}
      >
        Create matrix
      </button>
    </div>
  );
};
