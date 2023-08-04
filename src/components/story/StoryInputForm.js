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
import SongRecommend from "../song/SongRecommend";
import StoryLoading from "./StoryLoading";
import { getEmotion } from "../../api/story";

function StoryInputForm({ onChange, onSubmit, form, setFeeling, content }) {
  const username = localStorage.getItem("username");
  const [page, setPage] = useState(0);
  const [emo, setEmo] = useState("");

  const emotionArr = [
    { emotion: "joy", text: "신남" },
    { emotion: "anger", text: "화남" },
    { emotion: "sadness", text: "슬픔" },
    { emotion: "pleasure", text: "평온" },
    { emotion: "neutral", text: "보통" },
  ];

  const analyze = async () => {
    if (form.content !== "") {
      setPage(5);
      const response = await getEmotion(content);
      console.log(response);
      setEmo(response.prediction);
      setPage(1);
    } else {
      alert("내용을 작성해주세요");
    }
  };

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
            value={content}
            required
          />
          <Button type="button" onClick={analyze}>
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
          {/* <EmotionBtn
            style={{ backgroundColor: "lightgrey" }}
            type="button"
            onClick={() => {
              setFeeling("sadness");
              setEmo("sadness");
              setPage(2);
            }}
          >
            슬픔
          </EmotionBtn> */}
          {emo === "sad" ? (
            <EmotionBtn
              style={{ backgroundColor: "lightgrey" }}
              type="button"
              onClick={() => {
                setFeeling("sadness");
                setEmo("sadness");
                setPage(2);
              }}
            >
              슬픔
            </EmotionBtn>
          ) : null}
          {emo === "ang" ? (
            <EmotionBtn
              style={{ backgroundColor: "lightgrey" }}
              type="button"
              onClick={() => {
                setFeeling("anger");
                setEmo("anger");
                setPage(2);
              }}
            >
              화남
            </EmotionBtn>
          ) : null}
          {emo === "pos" ? (
            <div>
              <EmotionBtn
                style={{ backgroundColor: "lightgrey" }}
                type="button"
                onClick={() => {
                  setFeeling("joy");
                  setEmo("joy");
                  setPage(2);
                }}
              >
                신남
              </EmotionBtn>
              <EmotionBtn
                style={{ backgroundColor: "lightgrey" }}
                type="button"
                onClick={() => {
                  setFeeling("pleasure");
                  setEmo("pleasure");
                  setPage(2);
                }}
              >
                평온
              </EmotionBtn>
            </div>
          ) : null}
          <h2>아니라면 어떤 기분이신가요?</h2>
          <div>
            {emotionArr.map((feel) => (
              <EmotionBtn
                style={{ backgroundColor: "lightgrey" }}
                type="button"
                onClick={() => {
                  setFeeling(feel.emotion);
                  setEmo(feel.emotion);
                  setPage(2);
                }}
                key={feel.emotion}
              >
                {feel.text}
              </EmotionBtn>
            ))}
          </div>
        </StoryCreateForm>
      ) : null}
      {page === 5 ? <StoryLoading /> : null}
      {page === 2 ? <SongRecommend setPage={setPage} emotion={emo} /> : null}

      {page === 3 ? <SongSearch type={"post"} setPage={setPage} /> : null}

      {page === 4 ? <StoryResultPage form={form} onSubmit={onSubmit} /> : null}
    </>
  );
}

export default StoryInputForm;
