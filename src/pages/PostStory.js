import { useParams } from "react-router-dom";
import { Responsive } from "../components/Responsive";
import { BodyDiv } from "../components/common/Divs";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";

const PostStory = () => {
  const id = useParams("id");
  return (
    <Responsive>
      <Header content={"사연 작성"} />
      <BodyDiv>
        <h1>아 슈발 덥다</h1>
      </BodyDiv>
      <Navbar />
    </Responsive>
  );
};

export default PostStory;
