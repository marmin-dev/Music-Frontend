import React, { useEffect } from "react";
import { Responsive } from "../components/Responsive";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/HeadBar";
import LoginForm from "../components/loginRegister/LoginForm";
import {
  LoginLogo,
  SpaceDiv,
} from "../components/loginRegister/LoginComponents";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../modules/auth";

const Login = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };
  // 폼등록
  const onSubmit = (e) => {
    e.preventDefault();
    const { userId, password } = form;
    dispatch(login({ userId, password }));
  };
  // 렌더링시 초기화
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류발생");
      console.log(authError);
    }
    if (auth) {
      console.log("로그인 성공");
      localStorage.setItem("token", auth.body.token);
      localStorage.setItem("username", auth.body.username);
      localStorage.setItem("userId", auth.body.id);
      window.location.href = "/";
    }
  }, [auth, authError, dispatch]);

  return (
    <Responsive>
      <Header content={"로그인"} />
      <LoginLogo src="img/story2.png" />
      <SpaceDiv />
      <LoginForm
        type={true}
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <Navbar />
    </Responsive>
  );
};

export default Login;
