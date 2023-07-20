import { Form } from "../loginRegister/LoginComponents";
import { Button, Input } from "../loginRegister/LoginComponents";
import { ErrorMessage } from "../common/Messages";

const StoreCreateForm = ({ form, onChange, onSubmit, error }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="새로운 DJ 부스이름은 무엇인가요?"
        type="text"
        value={form.storeName}
        onChange={onChange}
        name="storeName"
      />
      <div style={{ height: "5px" }} />
      {error !== "" ? <ErrorMessage>{error}</ErrorMessage> : null}
      <Button>DJ부스 생성하기</Button>
    </Form>
  );
};

export default StoreCreateForm;
