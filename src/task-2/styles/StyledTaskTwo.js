import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
  color: white;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const StyledHeading = styled.header`
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: start;
  margin-left: 50px;
  margin-bottom: 30px;
`;

export const StyledMainDiv = styled.div`
  width: 800px;
  height: 500px;
  margin: 50px;
`;

export const StyledInsideDiv = styled.div`
  width: 900px;
  height: 400px;
  margin-left: 50px;
`;

export const StyledUserTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1px;
`;

export const StyledTableHeader = styled.th`
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding: 5px;
  font-weight: 700;
  padding: 10px 0;
`;

export const StyledTableData = styled.td`
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding: 5px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  height: 30px;
  &:last-child {
    border-right: 2px solid black;
    width: 100px;
  }
  &:first-child {
    border-left: 2px solid black;
  }
`;

export const StyledTableRow = styled.tr`
  & ${StyledButton} {
    display: none;
    margin: 0;
  }
  &:hover ${StyledButton} {
    display: block;
  }
`;

export const StyledTableBody = styled.tbody``;

export const StyledLoadingHeader = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  margin-top: 50px;
`;

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(360deg);
    }
`;

export const StyledLoadingCircle = styled.div`
  width: 100px;
  height: 100px;
  margin: 110px auto 0;
  border: solid 10px #8822aa;
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transition: all 0.5s ease-in;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
