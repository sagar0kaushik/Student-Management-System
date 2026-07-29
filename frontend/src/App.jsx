import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StudentCrud from "./pages/StudentCrud";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentCrud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;