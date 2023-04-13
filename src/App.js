import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import { Analytics, Dashboard, Likes, Schedule, User } from "./Routes";
import Analytics from "./Routes/Analytics";
import Dashboard from "./Routes/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
