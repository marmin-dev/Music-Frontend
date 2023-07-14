import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<Home />} />
      {/* 로그인 페이지 */}
      <Route path="/login" element={<Login />} />
      {/* 회원가입 페이지 */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
