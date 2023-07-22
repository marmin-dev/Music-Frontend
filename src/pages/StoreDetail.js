import React, { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { getStoreDetail } from "../api/store";
import { useParams } from "react-router-dom";

import { DetailBodyDiv } from "../components/common/Divs";
import SpotifyPlay from "../components/store/SpotifyPlay";
import StoryList from "../components/story/StoryList";
import HeaderPlus from "../components/common/HeaderPlus";
import {
  ModalBtn,
  ModalP,
  UserDeleteModal,
} from "../components/mypage/MyPageStyle";

const StoreDetail = () => {
  const id = useParams("id");
  const [storeName, setStoreName] = useState("Loadiing...");
  const token = localStorage.getItem("SPOTIFY");
  const [modal, setModal] = useState(false);
  // -----------------------------------------------------
  useEffect(() => {
    // console.log(id);
    const fetch = async () => {
      const response = await getStoreDetail(id.id);
      setStoreName(response.data.storeName);
    };
    fetch();
  });

  const clickMenu = () => {
    setModal(true);
  };

  // -----------------------------------------------------
  return (
    <Responsive>
      <HeaderPlus content={storeName} type={false} event={clickMenu} />
      <DetailBodyDiv>
        <SpotifyPlay id={id.id} token={token} />
        <StoryList />
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
      <Navbar to={`/store/create/${id.id}`} />
    </Responsive>
  );
};

export default StoreDetail;
