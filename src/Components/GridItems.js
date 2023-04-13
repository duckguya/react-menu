import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Schedule from "../Routes/Schedule";
import Analytics from "../Routes/Analytics";
import Likes from "../Routes/Likes";
import User from "../Routes/User";

function GridItems() {
  const location = useLocation();
  let title = location.pathname.replace("/", "");

  return (
    <Container>
      {title === "" ? (
        <Dashboard />
      ) : title === "schedule" ? (
        <Schedule />
      ) : title === "analytics" ? (
        <Analytics />
      ) : title === "likes" ? (
        <Likes />
      ) : title === "user" ? (
        <User />
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 100px);
  /* height: 90vh; */
  margin: 50px 50px 50px 350px;
  box-shadow: gray 1px 1px 15px -5px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.boardColor};
`;

export default GridItems;
