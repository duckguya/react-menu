import Navbar from "./Components/Navbar";
import { useRecoilValue } from "recoil";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import { Analytics, Dashboard, Likes, Schedule, User } from "./Routes";
import Analytics from "./Routes/Analytics";
import Dashboard from "./Routes/Dashboard";
import Schedule from "./Routes/Schedule";
import Likes from "./Routes/Likes";
import User from "./Routes/User";
import { isDarkAtom, isOpenAtom } from "./atoms";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  overflow-x:hidden; // 가로 스크롤바 없애기
  background-color: ${(props) => props.theme.light};
  transition: all 0.5s ease;
}
/* body::-webkit-scrollbar {
    display: none;
} */
a {
  text-decoration:none;
  color:inherit;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <div style={{ margin: "50px" }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
