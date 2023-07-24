import { useEffect } from "react";
import StoryListItem from "./StoryListItem";
import { StoryListDiv } from "./StoryStyle";

const StoryList = ({ stories, loggedIn }) => {
  useEffect(() => {
    console.log(stories);
  });
  return (
    <StoryListDiv>
      {stories.map((story) => (
        <StoryListItem story={story} loggedIn={loggedIn} key={story.id} />
      ))}
    </StoryListDiv>
  );
};

export default StoryList;
