import { useState } from "react";
import { Button, Input, LoginDiv, RegisterLink, Form } from "./LoginComponents";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [type, setType] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword(e.target.value);
  };

  const handleloginSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", username, password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <LoginDiv>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          type="password"
          placeholder="패스워드"
          value={password}
          onChange={handlePasswordChange}
        />
        {type ? null : (
          <Input
            type="password2"
            placeholder="패스워드2"
            value={password2}
            onChange={handlePassword2Change}
          />
        )}
        {type ? (
          <RegisterLink onClick={() => setType(false)}>
            회원이 아니신가요?
          </RegisterLink>
        ) : (
          <RegisterLink onClick={() => setType(true)}>
            회원이신가요?
          </RegisterLink>
        )}
        <Button type="submit">로그인</Button>
      </Form>
    </LoginDiv>
  );
};

export default LoginForm;
