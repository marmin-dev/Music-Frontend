import React from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { StoreH2 } from "../components/store/StoreStyle";
import StoreCreateForm from "../components/store/StoreCreateForm";

const PostStore = () => {
  return (
    <Responsive>
      <Header content={"새 DJ부스 생성"} />
      <div style={{ height: "30px" }} />
      <StoreH2>새로운 DJ부스를 등록해볼까요?</StoreH2>
      <StoreCreateForm />

      <Navbar />
    </Responsive>
  );
};

export default PostStore;
