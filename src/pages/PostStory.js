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
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { form, create, createError } = useSelector(({ story }) => ({
    form: story.story,
    create: story.create,
    createError: story.createError,
  }));
  const storeId = useParams("id");
  const [feeling, setFeeling] = useState("");
  const [content, setContent] = useState("");
  // --------------------------------------------------
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(e.target.value);
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
    // dispatch(
    //   changeStoryField({
    //     key: "username",
    //     value: localStorage.getItem("username"),
    //   })
    // );

    console.log(form);
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      changeStoryField({
        key: "emotion",
        value: feeling,
      })
    );
  }, [feeling]);

  // --------------------------------------------------

  return (
    <div className="ResponsiveBackground">
      <Header content={"사연 작성"} />
      <BodyDiv>
        <StoryInputForm
          onChange={onChange}
          onSubmit={onSubmit}
          form={form}
          setFeeling={setFeeling}
          content={content}
          setContent={setContent}
        />
      </BodyDiv>
      <Navbar to={`/story/create/${storeId.id}`} toSong={storeId.id} />
    </div>
  );
};

export default PostStory;
