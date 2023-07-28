import { ItemImg, ItemLink } from "../store/StoreStyle";
import {
  ImgDiv2,
  ItemTextDiv2,
  StoryListItemDiv,
  StoryListItemDiv2,
} from "./StoryStyle";
import musicImg from "../../img/music.png";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { spotifyApi } from "../../api/spotifyApi";
import { useParams } from "react-router-dom";

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
          <ImgDiv2>
            {loggedIn ? <ItemImg src={img.url} /> : <ItemImg src={musicImg} />}
          </ImgDiv2>
          <ItemTextDiv2>
            <ItemLink to={`/story/detail/${storeId.id}/${story.id}`}>
              {story.username}
            </ItemLink>
            <Songp>{story.songName}</Songp>
            <ArtistP>{story.artist}</ArtistP>
          </ItemTextDiv2>
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
