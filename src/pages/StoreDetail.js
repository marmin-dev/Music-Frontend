import React, { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import Navbar from "../components/common/Navbar";
import { getStoreDetail } from "../api/store";
import { useParams } from "react-router-dom";
import { DetailBodyDiv } from "../components/common/Divs";
import SpotifyPlay from "../components/store/SpotifyPlay";
import HeaderPlus from "../components/common/HeaderPlus";
import { ModalBtn, UserDeleteModal } from "../components/mypage/MyPageStyle";
import { getStoryList } from "../api/story";
import StoryList from "../components/story/StoryList";

const StoreDetail = () => {
  const id = useParams("id");
  const [storeName, setStoreName] = useState("Loadiing...");
  const token = localStorage.getItem("SPOTIFY");
  const [modal, setModal] = useState(false);
  const [stories, setStories] = useState([]);
  const [playList, setPlayList] = useState([]);
  // -----------------------------------------------------
  useEffect(() => {
    // console.log(id);
    const fetch = async () => {
      const response = await getStoreDetail(id.id);
      setStoreName(response.data.storeName);
    };
    const fetchListData = async () => {
      const response = await getStoryList(id.id);
      setStories(response);
      const newPlayList = response.map((song) => `spotify:track:${song.uri}`);
      setPlayList((prevPlayList) => prevPlayList.concat(newPlayList));
    };

    fetchListData();
    fetch();
  }, []);

  const clickMenu = () => {
    setModal(true);
  };

  // -----------------------------------------------------
  return (
    <Responsive>
      <HeaderPlus content={storeName} type={false} event={clickMenu} />

      <DetailBodyDiv>
        <SpotifyPlay id={id.id} token={token} playList={playList} />
        <div style={{ height: "20px" }} />
        <StoryList stories={stories} loggedIn={token} />
      </DetailBodyDiv>
      {modal ? (
        <UserDeleteModal>
          <ModalBtn
            onClick={() => (window.location.href = "http://localhost:8888")}
          >
            스포티파이 다시 로그인하기
          </ModalBtn>
          <ModalBtn onClick={() => setModal(false)}>취소</ModalBtn>
        </UserDeleteModal>
      ) : null}
      <Navbar to={`/story/create/${id.id}`} />
    </Responsive>
  );
};

export default StoreDetail;
