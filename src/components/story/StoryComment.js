import {
  CommentADiv,
  CommentAuthor,
  CommentBtn,
  CommentBtnDiv,
  CommentForm,
  CommentImage,
  CommentInput,
  CommentItemDiv,
  StoryContentInner,
  BtnContentInner,
  CommentContentInner,
  StoryListDiv,
} from "./StoryStyle";
import heart from "../../img/heart.png";
import chat from "../../img/send.png";
import { useEffect, useState } from "react";
import { createComment, getCommentList } from "../../api/comment";
import { useParams } from "react-router-dom";

const StoryComment = ({ data }) => {
  const [amount, setAmount] = useState(0);
  const [comments, setComments] = useState([]);
  const storyId = useParams("id");
  const [create, setCreate] = useState(false);
  const userId = localStorage.getItem("userId");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetch = async () => {
      // console.log(data.id);
      const response = await getCommentList(storyId.id);
      console.log(response);
      setComments(response.data);
      setAmount(response.data.length);
    };
    fetch();
  }, []);

  const click = () => {
    if (localStorage.getItem("token")) {
      if (create) {
        setCreate(false);
      } else {
        setCreate(true);
      }
    } else {
      window.location.href = "/login";
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createComment(storyId.id, { userId, content }).then((response) => {
      console.log(response);
      window.location.href = `/story/detail/${storyId.storeid}/${storyId.id}`;
    });
  };

  const onChange = (e) => {
    setContent(e.target.value);
  };

  return (
    // <StoryListDiv>
    <div className="StoryListDiv">
      <div className="StoryContentDiv">
        <StoryContentInner>
          {data.content}
        </StoryContentInner>
      </div>  
      <CommentBtnDiv>
        {/* <CommentImage src={heart} /> */}
        <BtnContentInner>
          <CommentImage src={chat} onClick={click} />
          <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>댓글 {amount}개</p>
        </BtnContentInner>
      </CommentBtnDiv>
      {create ? (
        <CommentForm onSubmit={onSubmit}>
          <CommentInput
            placeholder="놀라운 댓글을 입력해보세요"
            required
            onChange={onChange}
          />
          <CommentBtn>댓글등록</CommentBtn>
        </CommentForm>
      ) : null}
      {/* <CommentADiv>
        
      </CommentADiv> */}
      <CommentContentInner>
        {comments.map((comment) => (
            <CommentItemDiv key={comment.id}>
              <CommentAuthor>{comment.username}</CommentAuthor>
              {comment.content}
            </CommentItemDiv>
        ))}
      </CommentContentInner>
    </div>  

  );
};

export default StoryComment;
