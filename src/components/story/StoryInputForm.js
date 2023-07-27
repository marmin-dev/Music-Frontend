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
import SongSearch from "../song/SongSearch";
import StoryResultPage from "./StoryResultPage";

function StoryInputForm({ onChange, onSubmit, form, setFeeling }) {
  const username = localStorage.getItem("username");
  const [page, setPage] = useState(0);
  const emotionArr = [
    { emotion: "joy", text: "신남" },
    { emotion: "anger", text: "화남" },
    { emotion: "sadness", text: "슬픔" },
    { emotion: "pleasure", text: "평온" },
    { emotion: "neutral", text: "보통" },
  ];

  useEffect(() => {
    console.log(form);
    console.log(page);
  }, [page]);

  return (
    <>
      {page === 0 ? (
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
        </StoryCreateForm>
      ) : null}
      {page === 1 ? (
        <StoryCreateForm>
          <FormUserNameDiv>
            <ImgDiv3>
              <CommentImage src={userImg} />
            </ImgDiv3>
            <ArtistP>{username}님의 사연</ArtistP>
          </FormUserNameDiv>
          <h2>사연 분석 결과입니다!</h2>
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
          <h2>아니라면 어떤 기분이신가요?</h2>
          <div>
            {emotionArr.map((feel) => (
              <EmotionBtn
                style={{ backgroundColor: "lightgrey" }}
                type="button"
                onClick={() => {
                  setFeeling(feel.emotion);
                  setPage(page + 1);
                }}
                key={feel.emotion}
              >
                {feel.text}
              </EmotionBtn>
            ))}
          </div>
        </StoryCreateForm>
      ) : null}
      {page === 2 ? <SongSearch type={"post"} setPage={setPage} /> : null}
      {page === 4 ? <StoryResultPage form={form} onSubmit={onSubmit} /> : null}
    </>
  );
}

export default StoryInputForm;
