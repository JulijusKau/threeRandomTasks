import styled from "styled-components";

export const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid black 1px;
  width: 600px;
  margin: 100px;
  height: 300px;
  box-shadow: -0.5rem -0.5rem black;
`;

export const StyledHeading = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  line-height: 50px;
  height: 60px;
  padding-top: 20px;
`;

export const StyledHeadingText = styled.div`
  font-family: "Times New Roman", Times, sans-serif;
  font-size: 70px;
`;

export const StyledOLetter = styled.div`
  font-family: "Times New Roman", Times, sans-serif;
  color: white;
  background-color: black;
  font-size: 70px;
  width: 60px;
  margin: 0 5px;
`;

export const StyledInsideDiv = styled.div`
  width: 370px;
`;
export const StyledParagraph = styled.p`
  text-align: start;
`;

export const StyledEmailDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
  box-shadow: 0.5rem 0.5rem black;
  height: 50px;
  padding: 0 15px;
`;

export const StyledEmailButton = styled.button`
  height: 35px;
  width: 80px;
  color: white;
  background-color: black;
  border-radius: 0;
`;
