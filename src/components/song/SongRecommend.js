import React, { useEffect, useState } from "react";
import {
  SearchDiv,
  SearchH2,
  SongImg,
  SongImg2,
  SongItemDiv,
  SongRecDiv,
  SongText,
  SongTextDiv,
} from "./SongStyle";
import { Button } from "../loginRegister/LoginComponents";
import { getRecommendSong } from "../../api/story";
import { ImgDiv } from "../store/StoreStyle";
import playImg from "../../img/play.png";
import { spotifyApi } from "../../api/spotifyApi";
import { useDispatch } from "react-redux";
import { changeStoreField } from "../../modules/store";
import { changeStoryField } from "../../modules/story";

function SongRecommend({ emotion, setPage }) {
  const username = localStorage.getItem("username");
  const [song, setSong] = useState({});
  const loggedIn = localStorage.getItem("SPOTIFY");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  // ========================

  useEffect(() => {
    const getRecommend = async () => {
      const response = await getRecommendSong({ emotion });
      setSong(response);
      spotifyApi.setAccessToken(loggedIn);
      spotifyApi.getTrack(response.uri).then((res) => {
        setImg(res.album.images[0]);
      });
    };
    getRecommend();
  }, []);

  const onSubmit = () => {
    dispatch(
      changeStoryField({
        key: "songName",
        value: song.songName,
      })
    );
    dispatch(
      changeStoryField({
        key: "artist",
        value: song.artist,
      })
    );
    dispatch(
      changeStoryField({
        key: "uri",
        value: song.uri,
      })
    );
    setPage(4);
  };
  const selectSong = () => {
    setPage(3);
  };

  // ========================
  return (
    // <SongRecDiv>
    <SongRecDiv>
      <SearchH2>{username}님의 기분에 따른 추천곡입니다</SearchH2>
      <SongItemDiv>
        <ImgDiv>
          {loggedIn ? <SongImg2 src={img.url} /> : <SongImg src={playImg} />}
        </ImgDiv>
        <SongTextDiv>
          <SongText>{song.songName}</SongText>
          <SongText>{song.artist}</SongText>
        </SongTextDiv>
      </SongItemDiv>
      <SearchH2>위 노래를 추천합니다</SearchH2>
      <Button onClick={onSubmit}>추천곡 신청하기</Button>
      <Button onClick={selectSong}>다른곡 신청하기</Button>
    </SongRecDiv>
    // </SongRecDiv>
  );
}

export default SongRecommend;
