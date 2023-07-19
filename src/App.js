import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StoreListPage from "./pages/StoreListPage";
import MyPage from "./pages/MyPage";
import MyDj from "./pages/MyDj";
import Account from "./pages/Account";

function App() {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<Home />} />
      {/* 로그인 페이지 */}
      <Route path="/login" element={<Login />} />
      {/* 회원가입 페이지 */}
      <Route path="/register" element={<Register />} />
      {/* 가게 리스트 페이지 */}
      <Route path="/stores" element={<StoreListPage />} />
      {/* 마이 페이지 */}
      <Route path="/mypage" element={<MyPage />} />
      {/* 내 dj부스 보기 페이지 */}
      <Route path="/mydj" element={<MyDj />} />
      {/* 내 계정 페이지 */}
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
