import React, { useEffect, useState } from "react";

import {
  SongImg,
  SongImg2,
  SongImg3,
  SongItemDiv,
  SongText,
  SongTextDiv,
} from "./SongStyle";
import playImg from "../../img/play.png";
import plusImg from "../../img/plus.png";
import { ImgDiv } from "../store/StoreStyle";
import { spotifyApi } from "../../api/spotifyApi";
import { useDispatch } from "react-redux";
import { changeStoryField } from "../../modules/story";

function SongItem({ song, type, setPage }) {
  const [loggedIn, setLoggedIn] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setLoggedIn(localStorage.getItem("SPOTIFY"));
  }, []);
  useEffect(() => {
    spotifyApi.setAccessToken(loggedIn);
    spotifyApi.getTrack(song.uri).then((response) => {
      setImg(response.album.images[0]);
      //   console.log(response);
    });
  }, [loggedIn]);

  const onClick = () => {
    setPage(4);
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
  };

  return (
    <SongItemDiv>
      <ImgDiv>
        {loggedIn ? <SongImg2 src={img.url} /> : <SongImg src={playImg} />}
      </ImgDiv>
      <SongTextDiv>
        <SongText>{song.songName}</SongText>
        <SongText>{song.artist}</SongText>
      </SongTextDiv>
      <ImgDiv>
        {type ? <SongImg3 src={plusImg} onClick={() => onClick()} /> : null}
      </ImgDiv>
    </SongItemDiv>
  );
}

export default SongItem;
