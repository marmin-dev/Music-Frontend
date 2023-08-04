import {
  ImgDiv,
  ItemDesc,
  ItemDiv,
  ItemImg,
  ItemLink,
  ItemTextDiv,
} from "./StoreStyle";
import barImg from "../../img/bar.jpg";

const StoreListItem = ({ store }) => {
  return (
    <ItemDiv>
      <ImgDiv>
        <ItemImg src={barImg} />
      </ImgDiv>
      <ItemTextDiv>
        <ItemLink to={`/store/${store.id}`}>{store.storeName}</ItemLink>
        <ItemDesc>{store.username}</ItemDesc>
      </ItemTextDiv>
    </ItemDiv>
  );
};

export default StoreListItem;
