import { useState } from "react";
import { Responsive } from "../components/Responsive";
import { SBodyDiv } from "../components/common/Divs";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import {
  ItemDiv,
  LastItemDiv,
  ModalBtn,
  ModalP,
  MyPageLink,
  MyPageOutLink,
  UserDeleteModal,
} from "../components/mypage/MyPageStyle";
import { deleteUser } from "../api/user";

export const MyPage = () => {
  const [modal, setModal] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Responsive>
      <Header content={"마이페이지"} />
      <SBodyDiv>
        <ItemDiv>
          <MyPageLink to={"/account"}>계정</MyPageLink>
        </ItemDiv>
        <ItemDiv>
          <MyPageLink to={"/mydj"}>나의 DJ부스</MyPageLink>
        </ItemDiv>
        <ItemDiv>
          <MyPageOutLink onClick={logout}>로그아웃</MyPageOutLink>
        </ItemDiv>
        <LastItemDiv>
          <MyPageOutLink onClick={() => setModal(true)}>회원탈퇴</MyPageOutLink>
        </LastItemDiv>
      </SBodyDiv>
      {modal ? (
        <UserDeleteModal>
          <ModalP>정말로 탈퇴하시겠습니까?</ModalP>
          <ModalBtn onClick={() => deleteUser()}>탈퇴하겠습니다</ModalBtn>
          <ModalBtn onClick={() => setModal(false)}>취소</ModalBtn>
        </UserDeleteModal>
      ) : null}
      <Navbar to={"/store/create"} />
    </Responsive>
  );
};

export default MyPage;
