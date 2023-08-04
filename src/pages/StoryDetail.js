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
  StoryPlayListDiv,
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
      console.log(storyId);
    };
    fetch();
  }, []);
  // -------------------------------------------
  return (
    <div className="ResponsiveBackground">
      <Header content={`@${username}`} />
      <DetailBodyDiv>
        <StoryComment data={data} />
        <StoryPlayListDiv>
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
        </StoryPlayListDiv>
      </DetailBodyDiv>
      <Navbar to={`/story/create/${storyId.storeid}`} toSong={storyId.id} />
    </div>
  );
};

export default StoryDetail;
