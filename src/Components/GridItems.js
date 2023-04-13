import styled from "styled-components";
import { useLocation } from "react-router-dom";

function GridItems() {
  const location = useLocation();
  let title = location.pathname.replace("/", "");

  return (
    <Container>
      <p>{title === "" ? "dashboard" : title}</p>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 100px);
  /* height: 90vh; */
  margin: 50px 50px 50px 350px;
  box-shadow: gray 1px 1px 15px -5px;
  border-radius: 15px;
  background-color: white;
`;

export default GridItems;
