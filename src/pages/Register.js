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
import { changeField, initializeForm, register } from "../modules/auth";
import logoImg from "../img/story2.png";

const Register = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };
  // 폼등록
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, userId, password, password2 } = form;
    if ([userId, password].includes("")) {
      setError("빈 칸을 모두 입력하세요");
      return;
    }
    if (password !== password2) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    }
    dispatch(register({ username, userId, password }));
  };
  // 컴포넌트 첫 렌더링시 폼 초기화
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 회원가입 성공 / 실패처리
  useEffect(() => {
    if (authError) {
      console.log("오류발생");
      console.log(authError);
      setError("오류발생");
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      window.location.href = "/login";
    }
  }, [auth, authError]);
  return (
    <div className="ResponsiveBackground">
      <Header content={"회원가입"} />
      <LoginLogo src={logoImg} />
      <SpaceDiv />
      <LoginForm
        type={false}
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
      <Navbar />
    </div>
  );
};

export default Register;
