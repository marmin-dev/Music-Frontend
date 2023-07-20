import { Form } from "../loginRegister/LoginComponents";
import { Button, Input } from "../loginRegister/LoginComponents";

const StoreCreateForm = () => {
  const sub = () => {
    console.log("hello");
  };
  return (
    <Form onSubmit={sub}>
      <Input placeholder="새로운 DJ 부스이름은 무엇인가요?" />
      <div style={{ height: "5px" }} />
      <Button>DJ부스 생성하기</Button>
    </Form>
  );
};

export default StoreCreateForm;
