import { useState } from "react";
import {
  StyledMainDiv,
  StyledMainDivRow,
  StyledSquare,
  StyledDotInSquare,
} from "../styles/StyledTaskThree";
import { DropDownValue } from "./DropDownValue";

export const TaskThree = () => {
  const [nMatrix, setNMatrix] = useState(1);

  const testFunction = (n) => {
    let matrix = [];
    const mid = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
      let row = [];
      let total1s = n - 2 * i;
      let margin = (n - total1s) / 2;

      for (let j = 0; j < n; j++) {
        if (j >= margin && j < margin + total1s) {
          // row.push(1);
          row.push(
            <StyledSquare>
              <StyledDotInSquare />
            </StyledSquare>
          );
        } else {
          // row.push(0);
          row.push(<StyledSquare />);
        }
      }

      if (i <= mid) {
        matrix.push(<StyledMainDivRow>{row}</StyledMainDivRow>);
      } else {
        matrix.push(matrix[n - i - 1]);
      }
    }
    console.log(matrix);
    return <div>{matrix}</div>;
  };

  const onButtonClick = (e) => {
    setNMatrix(e.target.value);
  };

  return (
    <StyledMainDiv>
      <h1>N X N Symetrical matrix where N = odd number and Nmax = 11</h1>
      <DropDownValue onClickFunction={onButtonClick} />
      {testFunction(nMatrix)}
    </StyledMainDiv>
  );
};
