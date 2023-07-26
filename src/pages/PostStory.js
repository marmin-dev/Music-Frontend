import { Responsive } from "../components/Responsive";
import { BodyDiv } from "../components/common/Divs";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStoryField,
  createStory,
  initializeForm,
} from "../modules/story";
import StoryInputForm from "../components/story/StoryInputForm";
import { useParams } from "react-router-dom";

const PostStory = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { form, create, createError } = useSelector(({ story }) => ({
    form: story.story,
    create: story.create,
    createError: story.createError,
  }));
  const storeId = useParams("id");
  // --------------------------------------------------
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeStoryField({
        key: name,
        value,
      })
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createStory(form));
    if (create) {
      window.location.href = `/store/${storeId.id}`;
    }
  };
  useEffect(() => {
    console.log(form);
    dispatch(initializeForm());
    dispatch(
      changeStoryField({
        key: "uri",
        value: "0V3wPSX9ygBnCm8psDIegu",
      })
    );
    dispatch(
      changeStoryField({
        key: "songName",
        value: "AntiHero",
      })
    );
    dispatch(
      changeStoryField({
        key: "artist",
        value: "Taylor Swift",
      })
    );
    dispatch(
      changeStoryField({
        key: "emotion",
        value: "우울함",
      })
    );
    dispatch(
      changeStoryField({
        key: "username",
        value: localStorage.getItem("username"),
      })
    );
    console.log(form);
  }, [dispatch]);

  // --------------------------------------------------

  return (
    <Responsive>
      <Header content={"사연 작성"} />
      <BodyDiv>
        <StoryInputForm onChange={onChange} onSubmit={onSubmit} />
      </BodyDiv>
      <Navbar />
    </Responsive>
  );
};

export default PostStory;
