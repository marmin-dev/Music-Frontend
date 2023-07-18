import { useState } from "react";
import StoreListItem from "./StoreListItem";
import { ListDiv } from "./StoreStyle";

const StoreList = () => {
  const [store, setStore] = useState({
    id: 2,
    storeName: "hello-store123",
    username: "helloUser",
  });
  return (
    <ListDiv>
      <StoreListItem store={store} />
      <StoreListItem store={store} />
      <StoreListItem store={store} />
      <StoreListItem store={store} />
    </ListDiv>
  );
};

export default StoreList;
