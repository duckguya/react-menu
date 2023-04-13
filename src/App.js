import Navbar from "./Components/Navbar";
import { useRecoilValue } from "recoil";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import { Analytics, Dashboard, Likes, Schedule, User } from "./Routes";
import Analytics from "./Routes/Analytics";
import Dashboard from "./Routes/Dashboard";
import Schedule from "./Routes/Schedule";
import Likes from "./Routes/Likes";
import User from "./Routes/User";
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
