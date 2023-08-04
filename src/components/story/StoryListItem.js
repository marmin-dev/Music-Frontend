import { ItemImg, ItemLink, ItemImgSpecial } from "../store/StoreStyle";
import {
  ImgDiv2,
  ImgDivSpecial,
  ItemTextDiv2,
  StoryListItemDiv,
  StoryListItemDiv2,
} from "./StoryStyle";
import musicImg from "../../img/music.png";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { spotifyApi } from "../../api/spotifyApi";
import { useParams } from "react-router-dom";
import document from "../../img/message.png";

export const ArtistP = styled.p`
  margin: 0px;
  padding: 0px;
  color: gray;
`;

export const Songp = styled(ArtistP)`
  color: black;
`;

const StoryListItem = ({ story, loggedIn }) => {
  const [img, setImg] = useState(musicImg);
  const storeId = useParams("id");
  useEffect(() => {
    if (loggedIn) {
      spotifyApi.setAccessToken(loggedIn);
      spotifyApi.getTrack(`${story.uri}`).then((response) => {
        console.log(response);
        setImg(response.album.images[0]);
      });
    }
  }, []);

  return (
    <>
      {story.content ? (
        <StoryListItemDiv2>
          <ImgDivSpecial>
            {loggedIn ? <ItemImg src={img.url} /> : <ItemImg src={musicImg} />}
          </ImgDivSpecial>
          <ItemTextDiv2>
            <ItemLink to={`/story/detail/${storeId.id}/${story.id}`}>
              {story.username}
            </ItemLink>
            <Songp>{story.songName}</Songp>
            <ArtistP>{story.artist}</ArtistP>
          </ItemTextDiv2>
          <ImgDivSpecial>
            <ItemImgSpecial src={document} />
              <span className="story">사연</span>
          </ImgDivSpecial>
        </StoryListItemDiv2>
      ) : (
        <StoryListItemDiv>
          <ImgDiv2>
            {loggedIn ? <ItemImg src={img.url} /> : <ItemImg src={musicImg} />}
          </ImgDiv2>
          <ItemTextDiv2>
            <ItemLink>{story.username}</ItemLink>
            <Songp>{story.songName}</Songp>
            <ArtistP>{story.artist}</ArtistP>
          </ItemTextDiv2>
        </StoryListItemDiv>
      )}
    </>
  );
};

export default StoryListItem;
