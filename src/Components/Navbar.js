import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom, isOpenAtom } from "../atoms";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(true);
  const [state, setState] = useState("/");
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const [isOpen, setIsOpen] = useRecoilState(isOpenAtom);
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
    let path = location.pathname;
    if (path === "/") setState(path);
    if (path === "/schedule") setState(path);
    if (path === "/analytics") setState(path);
    if (path === "/likes") setState(path);
    if (path === "/user") setState(path);
  }, [location.pathname]);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleToggle = () => {
    setIsDark(!isDark);
  };
  return (
    <Container>
      <Wrapper isOpen={isOpen}>
        <ItemTopWrapper>
          <ItemLogoWrapper>
            <Logo />
            <div>
              <p>I M Fine SD Team</p>
              <p style={{ fontSize: "12px" }}>Web Developer</p>
            </div>
          </ItemLogoWrapper>
          <Arrow
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            onClick={handleClick}
            isOpen={isOpen}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </Arrow>
          <ItemWrapperColor>
            <SvgWrapper>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -3 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </Svg>
            </SvgWrapper>
            {isOpen ? (
              <input type="text" placeholder="Search..." />
            ) : (
              <input type="text" />
            )}
          </ItemWrapperColor>
          <Link to={"/"}>
            <Item className={state === "/" ? " active" : ""}>
              <SvgWrapper>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className={state === "/" ? " active" : ""}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </Svg>
              </SvgWrapper>
              <p>Dashboard</p>
            </Item>
          </Link>

          <Link to={"/schedule"}>
            <Item className={state === "/schedule" ? " active" : ""}>
              <SvgWrapper>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className={state === "/schedule" ? " active" : ""}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
                </Svg>
              </SvgWrapper>
              <p>Schedule</p>
            </Item>
          </Link>
          <Link to={"/analytics"}>
            <Item className={state === "/analytics" ? " active" : ""}>
              <SvgWrapper>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className={state === "/analytics" ? " active" : ""}
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                    <g>
                      <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                      <rect height="5" width="2" x="7" y="12" />
                      <rect height="10" width="2" x="15" y="7" />
                      <rect height="3" width="2" x="11" y="14" />
                      <rect height="2" width="2" x="11" y="10" />
                    </g>
                  </g>
                </Svg>
              </SvgWrapper>
              <p>Analytics</p>
            </Item>
          </Link>
          <Link to={"/likes"}>
            <Item className={state === "/likes" ? " active" : ""}>
              <SvgWrapper>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className={state === "/likes" ? " active" : ""}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                </Svg>
              </SvgWrapper>
              <p>Likes</p>
            </Item>
          </Link>
          <Link to={"/user"}>
            <Item className={state === "/user" ? " active" : ""}>
              <SvgWrapper>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className={state === "/user" ? " active" : ""}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" />
                </Svg>
              </SvgWrapper>
              <p>User</p>
            </Item>
          </Link>
        </ItemTopWrapper>

        <ItemBottomWrapper>
          <Hr />
          <Item>
            <SvgWrapper>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 -3 24 24"
                width="24px"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                </g>
              </Svg>
            </SvgWrapper>

            <p>Logout</p>
          </Item>
          <ItemWrapperColor style={{ padding: isOpen ? "" : "10px 0" }}>
            <SvgWrapper style={{ display: isOpen ? "block" : "none" }}>
              {isOpen ? (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 -3 24 24"
                  width="24px"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
                </Svg>
              ) : (
                ""
              )}
            </SvgWrapper>
            <p>Dark Mode</p>
            <ToggleButton
              isDark={isDark}
              isOpen={isOpen}
              onClick={handleToggle}
              className={isDark ? "active" : ""}
            />
          </ItemWrapperColor>
        </ItemBottomWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 100%;
  background-color: transparent;
  z-index: 99;
`;

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  width: ${(props) => (props.isOpen ? "240px" : "80px")};
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 15px;
  padding: 10px;
  box-shadow: gray 1px 1px 15px -5px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  p {
    font-size: 14px;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }

  /* @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  } */
`;

const ToggleButton = styled.div`
  position: relative;
  width: 30px;
  height: 17px;
  border-radius: 8px;
  background-color: ${({ isDark }) => (isDark ? "#fff" : "#ccc")};
  margin-left: ${(props) => (props.isOpen ? "auto" : "")};
  margin: ${(props) => (props.isOpen ? "" : "auto")};

  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    top: 2.5px;
    left: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ isDark }) => (isDark ? "#000" : "#fff")};
    transition: all 0.2s;
  }
  &.active {
    &:after {
      transform: translateX(14px);
    }
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  color: #7f7f7f;
  padding: 10px;
`;
const ItemLogoWrapper = styled(Items)`
  p {
    margin-left: 10px;
  }
`;
const Item = styled(Items)`
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.hoverBackColor};
  }
  &:active {
    background-color: ${(props) => props.theme.mainColor};
    color: white;
    svg {
      fill: white;
    }
  }
  &.active {
    background-color: ${(props) => props.theme.mainColor};
    color: white;
  }
`;

const ItemWrapperColor = styled(Items)`
  margin: 10px;
  background-color: ${(props) => props.theme.medium};
  border-radius: 10px;
  align-content: center;
  transition: all 0.5s ease;
  input {
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
`;

const Svg = styled.svg`
  fill: #7f7f7f;
  &.active {
    fill: white;
  }
`;

const SvgWrapper = styled.div`
  width: 40px;
  align-items: center;
`;

const Logo = styled.div`
  background-image: url("/images/IMx512.png");
  background-size: 100% 100%;
  background-position: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
const Arrow = styled.svg`
  position: absolute;
  transform: ${(props) => (props.isOpen ? "scaleX(-1)" : "scaleX(1)")};
  right: -10px;
  top: 28px;
  background-color: ${(props) => props.theme.mainColor};
  fill: white;
  border-radius: 50px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:active {
    width: 20px;
    height: 20px;
  }
`;
const Hr = styled.div`
  background-color: #d1d1d1;
  height: 1px;
  margin: 10px 0;
`;
const ItemTopWrapper = styled.div``;
const ItemBottomWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default Navbar;
