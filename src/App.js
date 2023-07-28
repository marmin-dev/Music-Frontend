import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import StoreListPage from "./pages/StoreListPage";
import MyPage from "./pages/MyPage";
import MyDj from "./pages/MyDj";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostStore from "./pages/PostStore";
import StoreDetail from "./pages/StoreDetail";
import PostStory from "./pages/PostStory";
import StoryDetail from "./pages/StoryDetail";
import SongPage from "./pages/SongPage";
import RequestSong from "./pages/RequestSong";

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
      {/* 새 DJ부스 생성 */}
      <Route path="/store/create" element={<PostStore />} />
      {/* DJ 뷰 디테일 뷰 */}
      <Route path="/store/:id" element={<StoreDetail />} />
      {/* 사연 작성하기 */}
      <Route path="/story/create/:id" element={<PostStory />} />
      {/* 사연 디테일 뷰 */}
      <Route path="/story/detail/:id" element={<StoryDetail />} />
      {/* 노래 검색하는 창 */}
      <Route path="/song" element={<SongPage />} />
      {/* 사연없이 노래만 검색하기 */}
      <Route path="/song/request/:id" element={<RequestSong />} />
    </Routes>
  );
}

export default App;
