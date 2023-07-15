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
import { changeField, initializeForm } from "../modules/auth";

const Login = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));

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
  };
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

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
