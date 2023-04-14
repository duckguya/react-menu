import styled from "styled-components";

function Likes() {
  return <Container>Likes</Container>;
}
const Container = styled.div`
  height: calc(100vh - 100px);
  /* height: 90vh; */
  margin: 50px 50px 50px 350px;
  box-shadow: gray 1px 1px 15px -5px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.boardColor};
`;
export default Likes;
