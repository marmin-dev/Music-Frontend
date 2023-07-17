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
import { changeField, initializeForm, register } from "../modules/auth";

const Register = () => {
  const dispatch = useDispatch();
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
    if (password !== password2) {
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
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      window.location.href = "/login";
    }
  }, [auth, authError]);
  return (
    <Responsive>
      <Header content={"회원가입"} />
      <LoginLogo src="img/story2.png" />
      <SpaceDiv />
      <LoginForm
        type={false}
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <Navbar />
    </Responsive>
  );
};

export default Register;
