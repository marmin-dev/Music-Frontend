import {
  ArtistP,
  CommentImage,
  FormUserNameDiv,
  ImgDiv3,
  StoryCreateForm,
  StoryTextArea,
} from "./StoryStyle";
import userImg from "../../img/user.png";
import { Button } from "../loginRegister/LoginComponents";
import { useEffect, useState } from "react";

function StoryInputForm({ onChange, onSubmit }) {
  const username = localStorage.getItem("username");
  const [page, setPage] = useState(0);

  return (
    <StoryCreateForm>
      <FormUserNameDiv>
        <ImgDiv3>
          <CommentImage src={userImg} />
        </ImgDiv3>
        <ArtistP>{username}님의 사연</ArtistP>
      </FormUserNameDiv>
      <StoryTextArea
        placeholder="믿을 수 없는 사연을 작성해보세요"
        name="content"
        onChange={onChange}
      />
      <Button type="submit" onClick={onSubmit}>
        다음으로
      </Button>
    </StoryCreateForm>
  );
}

export default StoryInputForm;
