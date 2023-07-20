import React, { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { StoreH2 } from "../components/store/StoreStyle";
import StoreCreateForm from "../components/store/StoreCreateForm";
import { useDispatch, useSelector } from "react-redux";
import { changeStoreField, initializeForm, postStore } from "../modules/store";

const PostStore = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { form, create, createError } = useSelector(({ store }) => ({
    form: store.createStore,
    create: store.create,
    createError: store.createError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeStoreField({
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { storeName } = form;
    if (storeName == "") {
      setError("빈칸을 모두 입력하세요");
      return;
    }
    console.log(form);
    dispatch(postStore(form));
  };

  useEffect(() => {
    console.log(form);
    dispatch(initializeForm());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(create);
  //   console.log(createError);
  //   if (createError) {
  //     console.log("오류발생");
  //     console.log(createError);
  //     setError("에러발생");
  //   }
  //   if (create) {
  //     console.log("DJ부스생성!");
  //     window.location.href = "/stores";
  //   }
  // }, [create, createError, dispatch]);

  return (
    <Responsive>
      <Header content={"새 DJ부스 생성"} />
      <div style={{ height: "30px" }} />
      <StoreH2>새로운 DJ부스를 등록해볼까요?</StoreH2>
      <StoreCreateForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
      <Navbar />
    </Responsive>
  );
};

export default PostStore;
