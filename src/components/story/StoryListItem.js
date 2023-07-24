import { ItemImg, ItemLink } from "../store/StoreStyle";
import {
  ImgDiv2,
  ItemTextDiv2,
  StoryListItemDiv,
  StoryListItemDiv2,
} from "./StoryStyle";
import musicImg from "../../img/music.png";
import { styled } from "styled-components";

export const ArtistP = styled.p`
  margin: 0px;
  padding: 0px;
  color: gray;
`;

export const Songp = styled(ArtistP)`
  color: black;
`;

const StoryListItem = ({ story, loggedIn }) => {
  return (
    <>
      {story.content ? (
        <StoryListItemDiv2>
          <ImgDiv2>
            {loggedIn ? <ItemImg src={musicImg} /> : <ItemImg src={musicImg} />}
          </ImgDiv2>
          <ItemTextDiv2>
            <ItemLink>{story.username}</ItemLink>
            <Songp>{story.songName}</Songp>
            <ArtistP>{story.artist}</ArtistP>
          </ItemTextDiv2>
        </StoryListItemDiv2>
      ) : (
        <StoryListItemDiv>
          <ImgDiv2>
            {loggedIn ? <ItemImg src={musicImg} /> : <ItemImg src={musicImg} />}
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
