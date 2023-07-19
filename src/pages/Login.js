import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState("");

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
    if ([userId, password].includes("")) {
      setError("빈 칸을 모두 입력하세요");
      return;
    }
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
      setError("에러발생");
    }
    if (auth) {
      console.log("로그인 성공");
      console.log(auth);
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
        error={error}
      />
      <Navbar />
    </Responsive>
  );
};

export default Login;
