import React from "react";
import { Responsive } from "../components/Responsive";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/HeadBar";
import LoginForm from "../components/loginRegister/LoginForm";
import {
  LoginLogo,
  SpaceDiv,
} from "../components/loginRegister/LoginComponents";

const Login = () => {
  return (
    <Responsive>
      <Header content={"마이페이지"} />
      <LoginLogo src="img/story2.png" />
      <SpaceDiv />
      <LoginForm />
      <Navbar />
    </Responsive>
  );
};

export default Login;
