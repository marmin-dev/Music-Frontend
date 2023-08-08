import React, { useEffect, useState } from "react";
import {
  SearchDiv,
  SearchH2,
  SongImg,
  SongImg2,
  SongItemDiv,
  SongText,
  SongTextDiv,
} from "../song/SongStyle";
import { TextDiv } from "./StoryStyle";
import { ImgDiv } from "../store/StoreStyle";
import playImg from "../../img/play.png";
import { spotifyApi } from "../../api/spotifyApi";
import { Button } from "../loginRegister/LoginComponents";

function StoryResultPage({ form, onSubmit }) {
  const username = localStorage.getItem("username");
  const [emotion, setEmotion] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("SPOTIFY"));
  const [img, setImg] = useState("");
  // -------------------------------------------------------
  useEffect(() => {
    if (form.emotion === "sadness") {
      setEmotion("슬픔");
    } else if (form.emotion === "anger") {
      setEmotion("화남");
    } else if (form.emotion === "joy") {
      setEmotion("기쁨");
    } else if (form.emotion === "pleasure") {
      setEmotion("평온");
    } else {
      setEmotion("가장 보통의 하루");
    }
    if (loggedIn) {
      spotifyApi.setAccessToken(loggedIn);
      spotifyApi.getTrack(form.uri).then((response) => {
        setImg(response.album.images[0]);
        //   console.log(response);
      });
    }
  }, []);

  // -------------------------------------------------------
  return (
    <SearchDiv>
      <SearchH2>{username}님의 사연은</SearchH2>
      <TextDiv>{form.content}</TextDiv>
      <SearchH2>
        오늘의 감정은 {emotion} 이시군요
        <br />
      </SearchH2>
      <SongItemDiv>
        <ImgDiv>
          {loggedIn ? <SongImg2 src={img.url} /> : <SongImg src={playImg} />}
        </ImgDiv>
        <SongTextDiv>
          <SongText>{form.songName}</SongText>
          <SongText>{form.artist}</SongText>
        </SongTextDiv>
      </SongItemDiv>
      <SearchH2>위 노래를 신청하셨습니다</SearchH2>
      <Button onClick={onSubmit}>사연신청하기</Button>
    </SearchDiv>
  );
}

export default StoryResultPage;
