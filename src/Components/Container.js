import styled from "styled-components";
import { isDarkAtom, isOpenAtom } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";

function Container({ children }) {
  const isOpen = useRecoilValue(isOpenAtom);

  return <StyledContainer isOpen={isOpen}>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  /* width: 100%; */
  padding: 20px;
  height: calc(100vh - 100px);
  margin: ${(props) =>
    props.isOpen ? "50px 50px 50px 350px" : "50px 50px 50px 190px"};
  box-shadow: gray 1px 1px 15px -5px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.boardColor};
  color: ${(props) => props.theme.fontColor};
  transition: all 0.5s ease;
  /* @media screen and (max-width: 768px) {
  } */
`;
export default Container;
