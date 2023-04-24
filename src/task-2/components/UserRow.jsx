import {
  StyledTableBody,
  StyledTableData,
  StyledTableRow,
  StyledButton,
} from "../styles/StyledTaskTwo";

export const UserRow = ({ name, email, phone, onClickDeleteFunction }) => {
  return (
    <StyledTableBody>
      <StyledTableRow>
        <StyledTableData>{name}</StyledTableData>
        <StyledTableData>{email}</StyledTableData>
        <StyledTableData>{phone}</StyledTableData>
        <StyledTableData>
          <StyledButton onClick={onClickDeleteFunction}>delete</StyledButton>
        </StyledTableData>
      </StyledTableRow>
    </StyledTableBody>
  );
};
