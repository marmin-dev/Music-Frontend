import { Button, Input, LoginDiv, RegisterLink, Form } from "./LoginComponents";

const LoginForm = ({ type, form, onChange, onSubmit }) => {
  return (
    <LoginDiv>
      <Form onSubmit={onSubmit}>
        {type ? null : (
          <Input
            type="username"
            placeholder="닉네임"
            value={form.username}
            onChange={onChange}
            name="username"
          />
        )}
        <Input
          type="text"
          placeholder="아이디"
          value={form.userId}
          onChange={onChange}
          name="userId"
        />
        <Input
          type="password"
          placeholder="패스워드"
          value={form.password}
          onChange={onChange}
          name="password"
        />
        {type ? null : (
          <Input
            type="password"
            placeholder="패스워드 확인"
            value={form.password2}
            onChange={onChange}
            name="password2"
          />
        )}
        {type ? (
          <RegisterLink to={"/register"}>회원이아니신가요?</RegisterLink>
        ) : (
          <RegisterLink to={"/login"}>회원이신가요?</RegisterLink>
        )}
        {type ? (
          <Button type="submit">로그인</Button>
        ) : (
          <Button type="submit">회원가입</Button>
        )}
      </Form>
    </LoginDiv>
  );
};

export default LoginForm;
