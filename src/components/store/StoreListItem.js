import {
  ImgDiv,
  ItemDesc,
  ItemDiv,
  ItemImg,
  ItemLink,
  ItemTextDiv,
} from "./StoreStyle";
import storeImg from "../../img/store.png";

const StoreListItem = ({ store }) => {
  return (
    <ItemDiv>
      <ImgDiv>
        <ItemImg src={storeImg} />
      </ImgDiv>
      <ItemTextDiv>
        <ItemLink to={`/store/${store.id}`}>{store.storeName}</ItemLink>
        <ItemDesc>{store.username}</ItemDesc>
      </ItemTextDiv>
    </ItemDiv>
  );
};

export default StoreListItem;
