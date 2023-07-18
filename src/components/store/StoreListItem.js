import {
  ImgDiv,
  ItemDesc,
  ItemDiv,
  ItemImg,
  ItemLink,
  ItemTextDiv,
} from "./StoreStyle";

const StoreListItem = ({ store }) => {
  return (
    <ItemDiv>
      <ImgDiv>
        <ItemImg src="/img/store.png" />
      </ImgDiv>
      <ItemTextDiv>
        <ItemLink>{store.storeName}</ItemLink>
        <ItemDesc>{store.username}</ItemDesc>
      </ItemTextDiv>
    </ItemDiv>
  );
};

export default StoreListItem;
