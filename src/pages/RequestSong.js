import { useDispatch, useSelector } from "react-redux";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import SongSearch from "../components/song/SongSearch";
import { useEffect, useState } from "react";
import { createStory, initializeForm } from "../modules/story";
import {
  SearchDiv,
  SearchH2,
  SongImg,
  SongImg2,
  SongItemDiv,
  SongText,
  SongTextDiv,
} from "../components/song/SongStyle";
import { useParams } from "react-router-dom";

import playImg from "../img/play.png";
import { Button } from "../components/loginRegister/LoginComponents";

function RequestSong() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { form, create, createError } = useSelector(({ story }) => ({
    form: story.story,
    create: story.create,
    createError: story.createError,
  }));
  const username = localStorage.getItem("username");
  const loggedIn = localStorage.getItem("SPOTIFY");
  const [img, setImg] = useState("");
  const storeId = useParams("id");
  // >>==================================================
  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createStory(form));
    if (create) {
      window.location.href = `/store/${storeId.id}`;
    }
  };
  // >>==================================================
  return (
    <Responsive>
      <Header content={"노래 신청하기"} />
      {page === 0 ? (
        <div style={{ height: "80%", width: "100%" }}>
          <SongSearch type={"post"} setPage={setPage} />
        </div>
      ) : null}
      {page === 4 ? (
        <div>
          <SearchDiv>
            <SearchH2>{username}님의 신청곡은</SearchH2>
            <SongItemDiv>
              <SongTextDiv>
                <SongText>{form.songName}</SongText>
                <SongText>{form.artist}</SongText>
              </SongTextDiv>
            </SongItemDiv>
            <SearchH2>위 노래를 신청하셨습니다</SearchH2>
            <Button onClick={onSubmit}>신청곡선택하기</Button>
          </SearchDiv>
        </div>
      ) : null}
      <Navbar to={`/story/create/${storeId.id}`} toSong={storeId.id} />
    </Responsive>
  );
}

export default RequestSong;
