import styled from "styled-components";

function GridItems() {
  return <Container />;
}

const Container = styled.div`
  height: calc(100vh - 100px);
  /* height: 90vh; */
  margin: 0px 50px 50px 350px;
  box-shadow: gray 1px 1px 15px -5px;
  border-radius: 15px;
`;

export default GridItems;
