import {
  ArtistP,
  CommentImage,
  EmotionBtn,
  FormUserNameDiv,
  ImgDiv3,
  StoryCreateForm,
  StoryTextArea,
} from "./StoryStyle";
import userImg from "../../img/user.png";
import { Button } from "../loginRegister/LoginComponents";
import { useEffect, useState } from "react";

function StoryInputForm({ onChange, onSubmit, form, setFeeling }) {
  const username = localStorage.getItem("username");
  const [page, setPage] = useState(0);

  return (
    <StoryCreateForm onSubmit={onSubmit}>
      <FormUserNameDiv>
        <ImgDiv3>
          <CommentImage src={userImg} />
        </ImgDiv3>
        <ArtistP>{username}님의 사연</ArtistP>
      </FormUserNameDiv>
      {page === 0 ? (
        <>
          <StoryTextArea
            placeholder="믿을 수 없는 사연을 작성해보세요"
            name="content"
            onChange={onChange}
            required
          />
          <Button
            type="button"
            onClick={() => {
              if (form.content !== "") {
                setPage(page + 1);
              } else {
                alert("내용을 작성해주세요");
              }
            }}
          >
            다음으로
          </Button>
        </>
      ) : null}
      {page === 1 ? (
        <>
          <h2>사연을 분석 결과입니다!</h2>

          <EmotionBtn
            style={{ backgroundColor: "lightgrey" }}
            type="button"
            onClick={() => {
              setFeeling("sadness");
              setPage(page + 1);
            }}
          >
            슬픔
          </EmotionBtn>
          <h2>아니리면 어떤 기분이신가요?</h2>
          <div>
            <EmotionBtn
              style={{ backgroundColor: "lightgrey" }}
              type="button"
              onClick={() => {
                setFeeling("sadness");
                setPage(page + 1);
              }}
            >
              슬픔
            </EmotionBtn>
            <EmotionBtn
              style={{ backgroundColor: "lightgrey" }}
              type="button"
              onClick={() => {
                setFeeling("sadness");
                setPage(page + 1);
              }}
            >
              슬픔
            </EmotionBtn>

            <EmotionBtn
              style={{ backgroundColor: "lightgrey" }}
              type="button"
              onClick={() => {
                setFeeling("sadness");
                setPage(page + 1);
              }}
            >
              슬픔
            </EmotionBtn>
          </div>
          <div>
            <EmotionBtn
              style={{ backgroundColor: "lightgrey" }}
              type="button"
              onClick={() => {
                setFeeling("sadness");
                setPage(page + 1);
              }}
            >
              슬픔
            </EmotionBtn>
            <EmotionBtn
              style={{ backgroundColor: "lightgrey" }}
              type="button"
              onClick={() => {
                setFeeling("sadness");
                setPage(page + 1);
              }}
            >
              슬픔
            </EmotionBtn>
          </div>
        </>
      ) : null}
    </StoryCreateForm>
  );
}

export default StoryInputForm;
