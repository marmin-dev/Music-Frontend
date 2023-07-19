import React, { useState } from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { UserNameH2 } from "../components/mypage/MyPageStyle";

const Account = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  return (
    <Responsive>
      <Header content={username + "님의 계정"} />
      <UserNameH2>{username}</UserNameH2>

      <Navbar />
    </Responsive>
  );
};

export default Account;
