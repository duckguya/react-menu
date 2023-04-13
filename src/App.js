import Navbar from "./Components/Navbar";
import { useRecoilValue } from "recoil";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import { Analytics, Dashboard, Likes, Schedule, User } from "./Routes";
import Analytics from "./Routes/Analytics";
import Dashboard from "./Routes/Dashboard";
import { isDarkAtom } from "./atoms";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <div style={{ margin: "50px" }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
