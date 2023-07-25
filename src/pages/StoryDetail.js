import React, { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { useParams } from "react-router-dom";
import { getStoryDetail } from "../api/story";
import { DetailBodyDiv } from "../components/common/Divs";
import {
  ImgDiv2,
  ItemTextDiv2,
  PlayListDiv,
} from "../components/story/StoryStyle";
import { ItemImg } from "../components/store/StoreStyle";
import { ArtistP, Songp } from "../components/story/StoryListItem";
import musicImg from "../img/music.png";
import { spotifyApi } from "../api/spotifyApi";
import StoryComment from "../components/story/StoryComment";

const StoryDetail = () => {
  // -------------------------------------------
  const storyId = useParams("id");
  const spotifyToken = localStorage.getItem("SPOTIFY");
  const [data, setData] = useState({});
  const [username, setUsername] = useState("Loading...");
  //   const [song, setSong] = useState(null);
  const [img, setImg] = useState(musicImg);
  // -------------------------------------------
  useEffect(() => {
    const fetch = async () => {
      const response = await getStoryDetail(storyId.id);
      console.log(response);
      setData(response);
      setUsername(response.username);
      if (spotifyToken) {
        spotifyApi.setAccessToken(spotifyToken);
        spotifyApi.getTrack(`${response.uri}`).then((track) => {
          console.log(track);
          setImg(track.album.images[0]);
        });
      }
    };
    fetch();
  }, []);
  // -------------------------------------------
  return (
    <Responsive>
      <Header content={`${username}의 신청곡`} />
      <DetailBodyDiv>
        <PlayListDiv>
          <ImgDiv2>
            {spotifyToken ? (
              <ItemImg src={img.url} />
            ) : (
              <ItemImg src={musicImg} />
            )}
          </ImgDiv2>
          <ItemTextDiv2>
            <Songp>{data.songName}</Songp>
            <ArtistP>{data.artist}</ArtistP>
          </ItemTextDiv2>
        </PlayListDiv>
        <StoryComment data={data} />
      </DetailBodyDiv>
      <Navbar />
    </Responsive>
  );
};

export default StoryDetail;
