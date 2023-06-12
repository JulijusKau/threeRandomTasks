import { useState } from "react";
import axios from "axios";
import {
  StyledLoadingCircle,
  StyledLoadingHeader,
  StyledMainDiv,
  StyledTableHeader,
  StyledUserTable,
  StyledHeading,
  StyledInsideDiv,
  StyledButton,
  StyledTableBody,
  StyledTableRow,
} from "../styles/StyledTaskTwo";
import { UserRow } from "./UserRow";
import { useEffect } from "react";

export const TaskTwo = () => {
  const removeUser = (id) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;

    axios.delete(url).then((res) => {
      console.log(res);
      const del = users.filter((user) => id !== user.id);
      setUsers(del);
      console.log(users);
      setShownUsersCount(shownUsersCount - 1);
    });
  };

  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [shownUsersCount, setShownUsersCount] = useState(5);
  const [showMoreClicked, setShowMoreClicked] = useState(0);
  const [loadLimit, setLoadLimit] = useState(5);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=${loadLimit}`)
      .then((res) => res.json())
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        setIsLoading(false);
      });
  }, [loadLimit, showMoreClicked]);

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", height: "500px" }}
      >
        <StyledLoadingCircle />
        <StyledLoadingHeader>
          Please wait while the information loads
        </StyledLoadingHeader>
      </div>
    );
  }
  return (
    <StyledMainDiv>
      <StyledHeading>Users</StyledHeading>
      <StyledInsideDiv>
        <StyledUserTable>
          <StyledTableBody>
            <StyledTableRow>
              <StyledTableHeader>Full name</StyledTableHeader>
              <StyledTableHeader>Email</StyledTableHeader>
              <StyledTableHeader>Phone</StyledTableHeader>
              <StyledTableHeader></StyledTableHeader>
            </StyledTableRow>
          </StyledTableBody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              name={user.name}
              phone={user.phone}
              email={user.email}
              onClickDeleteFunction={() => {
                removeUser(user.id);
              }}
            />
          ))}
        </StyledUserTable>
        <StyledButton
          onClick={() => {
            setLoadLimit(10);
            setShowMoreClicked(showMoreClicked + 1);
            setShownUsersCount(10);
          }}
        >
          {shownUsersCount === 10
            ? "All users are present"
            : `Show ${10 - shownUsersCount} more`}
        </StyledButton>
      </StyledInsideDiv>
    </StyledMainDiv>
  );
};
