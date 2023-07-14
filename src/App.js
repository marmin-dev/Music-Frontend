import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<Home />} />
      {/* 로그인 페이지 */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
