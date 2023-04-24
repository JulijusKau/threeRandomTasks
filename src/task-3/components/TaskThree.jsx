import { useState } from "react";
import {
  StyledMainDiv,
  StyledMainDivRow,
  StyledSquare,
  StyledDotInSquare,
} from "../styles/StyledTaskThree";
import { DropDownValue } from "./DropDownValue";

export const TaskThree = () => {
  const [rows, setRows] = useState(1);
  const [squaresPerRow, setSquaresPerRow] = useState(1);
  const [columns, setColumns] = useState(1);
  let wholeArray = Array.from({ length: rows * squaresPerRow }, (_, i) => {
    return i + 1;
  });

  const onButtonClick = (e) => {
    const val = e.target.value;
    setRows(val);
    setSquaresPerRow(val);
    setColumns(val);
    console.log(wholeArray);
  };

  return (
    <StyledMainDiv>
      <h1>N X N Symetrical matrix where N = odd number and Nmax = 11</h1>
      <DropDownValue onClickFunction={onButtonClick} />
      {Array.from({ length: rows }, (_, i) => (
        <StyledMainDivRow key={i}>
          {wholeArray.slice(i * columns, (i + 1) * columns).map((c) => {
            {
              return <StyledSquare key={c}>{c}</StyledSquare>;
          })}
        </StyledMainDivRow>
      ))}
    </StyledMainDiv>
  );
};
